<template>
  <auth-grid>
    <auth-grid-title>Sign Up</auth-grid-title>
    <auth-grid-form>
      <error-list :errors="errors" />
      <the-input v-model="email" type="email" placeholder="Email" />
      <the-input v-model="username" type="text" placeholder="Nome de usuário" />
      <the-input v-model="password" type="password" placeholder="Senha" />
      <the-input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirmar Senha"
      />

      <the-button @click="submit">Sign Up</the-button>
    </auth-grid-form>
  </auth-grid>
</template>

<script lang="ts">
import Vue from 'vue';
import AuthGridForm from '~/components/auth/auth-grid-form.vue';
import AuthGridTitle from '~/components/auth/auth-grid-title.vue';
import AuthGrid from '~/components/auth/auth-grid.vue';
import ErrorList from '~/components/error-list.vue';
import TheButton from '~/components/the-button.vue';
import theInput from '~/components/the-input.vue';

export default Vue.extend({
  components: {
    theInput,
    TheButton,
    AuthGrid,
    AuthGridTitle,
    AuthGridForm,
    ErrorList,
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      errors: [] as string[],
    };
  },
  methods: {
    async submit() {
      if (this.password !== this.confirmPassword) {
        this.errors = ['Passwords do not match'];
        return;
      }

      const payload = {
        email: this.email,
        username: this.username,
        password: this.password,
      };

      try {
        await this.$axios.post('auth/sign_up', payload);

        this.$router.push('/auth/login');
      } catch (error) {
        this.errors = error?.response?.data?.message ?? [
          'Sorry, this service might be offline.',
        ];
      }
    },
  },
});
</script>

<style scoped>
.register__grid {
  display: grid;
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.register__grid__title {
  text-transform: uppercase;
  font-size: 2.5rem;
  margin: auto;
}
</style>
