<template>
  <article v-if="jam">
    <h1>{{ jam.title }}</h1>
    <div class="flex">
      <div class="flex-1 mr-3">
        <img :src="imageUrl" :alt="jam.title">
      </div>
      <p class="flex-1">{{ jam.description }}</p>
    </div>
    <div class="pt-5">
      <strong>Wiki URL</strong>: <a :href="jam.url">{{ jam.url }}</a>
    </div>
    <div class="pt-5" v-if="loggedIn">
      <span v-if="liked">You like it!</span>
      <span v-else><a href="#" @click="like()">Click here to like it.</a></span>
    </div>
  </article>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { IJams } from "~/strapi";
    import { mapGetters } from 'vuex';
    import { LikesRepository } from "~/repository/likes";

    type ComponentData = {
        jam: IJams | null;
        liked: boolean;
    };

    export default Vue.extend({
        name: "JamDetailPage",
        data: (): ComponentData => ({
            jam: null,
            liked: false,
        }),
        async mounted() {
            await this.fetchData();
        },
        computed: {
            ...mapGetters({
                loggedIn: 'auth/loggedIn',
            }),
            imageUrl() {
                if (!this.jam) {
                    return false;
                }
                return this.$strapi.options.url + this.jam.image.formats.small.url;
            },
        },
        methods: {
            async fetchData() {
                this.jam = await this.$strapi.findOne('jams', this.$route.params.id);

                if (this.jam) {
                    const repo = new LikesRepository(this.$supabase);
                    this.liked = await repo.isLiked(this.jam.title);
                }
            },
            async like() {
                if (this.jam) {
                    const repo = new LikesRepository(this.$supabase);
                    await repo.likeJam(this.jam.title);
                    this.liked = true;
                }
            }
        }
    });
</script>

<style scoped>
</style>