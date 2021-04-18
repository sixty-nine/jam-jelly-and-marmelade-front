<template>
  <article>
    <h1>Jam list</h1>
    <ul v-for="jam in jams" :key="jam.id" v-if="jams">
       <li class="list-disc">
         <nuxt-link :to="`/jams/${jam.id}`">{{ jam.title }}</nuxt-link>
       </li>
    </ul>
  </article>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "JamListPage",
        data: () => ({ jams: [] }),
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                const jams = await this.$strapi.find('jams');
                this.jams = jams;
            },
        },
    });
</script>

<style scoped>
</style>