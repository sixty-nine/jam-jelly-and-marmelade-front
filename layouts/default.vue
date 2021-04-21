<template>
  <div class="container">
    <Navigation></Navigation>
    <Nuxt />
  </div>
</template>

<script lang="ts">

    import Vue from 'vue';

    export default Vue.extend({
        mounted() {
            this.$store.dispatch('auth/init');
        },
    });
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  @apply max-w-md mx-auto text-justify;
}

h1 {
  @apply text-xl font-bold mb-5;
}
a {
  @apply underline;
}
</style>
