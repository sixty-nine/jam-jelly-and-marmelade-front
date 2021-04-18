<template>
  <article>
    <h1>{{ title }}</h1>
    <p>
      {{ content }}
    </p>
  </article>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data: () => ({
            title: '',
            content: '',
        }),
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                const home = await this.$strapi.find('home-page');
                this.title = home.title;
                this.content = home.content;
            }
        }
    })
</script>

