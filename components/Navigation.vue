<template>
  <nav class="flex bg-gray-800 text-yellow-500 py-5 px-1 mb-5 rounded">
    <ul class="flex-1"><NuxtLink to="/">Home</NuxtLink></ul>
    <ul class="flex-1"><NuxtLink to="/list">Jam types</NuxtLink></ul>
    <ul class="flex-1"><NuxtLink to="/about">About</NuxtLink></ul>
    <ul class="flex-1"><NuxtLink to="/auth/login">Login/Logout</NuxtLink></ul>
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