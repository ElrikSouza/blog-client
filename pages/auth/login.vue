<template>
  <div class="grid">
    <h1 class="grid__title">Login</h1>
    <main>
      <input v-model="email" type="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <button @click="submit">Log In</button>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async submit() {
      const response = await this.$axios.$post('auth/login', {
        email: this.email,
        password: this.password,
      });

      localStorage.setItem('token', response.token);
      this.$router.push('/');
    },
  },
});
</script>
