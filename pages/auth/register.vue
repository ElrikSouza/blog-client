<template>
  <div>
    <h1>Sign Up</h1>
    <div>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="username" type="text" placeholder="Nome de usuário" />
      <input v-model="password" type="password" placeholder="Senha" />
      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirmar Senha"
      />

      <button @click="submit">Sign Up</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    async submit() {
      if (this.password !== this.confirmPassword) {
        alert('passwords do not match');
        return;
      }

      const payload = {
        email: this.email,
        username: this.username,
        password: this.password,
      };

      await this.$axios.post('auth/sign_up', payload);

      this.$router.push('/auth/login');
    },
  },
});
</script>
