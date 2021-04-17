<template>
  <nav class="flex bg-gray-800 text-yellow-500 py-5 px-1 mb-5 rounded">
    <ul class="flex-1"><NuxtLink to="#">Jam types</NuxtLink></ul>
    <ul class="flex-1"><NuxtLink to="#">About</NuxtLink></ul>
  </nav>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: "Navigation",
    });
</script>

<style scoped>
</style>