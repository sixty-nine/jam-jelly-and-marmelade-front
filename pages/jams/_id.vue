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
  </article>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { IJams } from "~/strapi";

    type ComponentData = {
        jam: IJams | null;
    };

    export default Vue.extend({
        name: "JamDetailPage",
        data: (): ComponentData => ({ jam: null }),
        mounted() {
            this.fetchData();
        },
        computed: {
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
                console.log(this.jam);
            },
        }
    });
</script>

<style scoped>
</style>