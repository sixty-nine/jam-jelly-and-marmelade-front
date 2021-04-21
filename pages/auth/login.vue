<template>
  <div>

    <div v-if="!loggedIn">
      <a @click="login('google')">
        Login with Google
      </a>
    </div>

    <div v-else>
      <p>Hello {{session.user.email}}</p>
      <p>
        <a href="#" @click="logout()">Click here to logout</a>
      </p>
    </div>

  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { mapState, mapGetters, mapActions } from 'vuex';

    export default Vue.extend({
        name: 'LoginPage',
        computed: {
            ...mapState('auth', ['session']),
            ...mapGetters({
                loggedIn: 'auth/loggedIn',
            }),
        },
        methods: {
            ...mapActions({
                login: 'auth/signIn',
                logout: 'auth/signOut',
            }),
        },
    });
</script>
