<template>
  <auth-grid>
    <auth-grid-title>Login</auth-grid-title>
    <auth-grid-form>
      <error-list :errors="errors" />
      <the-input v-model="email" type="email" placeholder="Email" />
      <the-input v-model="password" type="password" placeholder="Senha" />

      <the-button @click="submit">Log In</the-button>
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
import { saveLoginToken } from '~/helpers/auth';

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
      password: '',
      errors: [],
    };
  },
  methods: {
    async submit() {
      try {
        const response = await this.$axios.$post('auth/login', {
          email: this.email,
          password: this.password,
        });

        saveLoginToken(response.token);

        this.$router.push('/posts');
      } catch (error) {
        this.errors = error?.response?.data?.message ?? [
          'Sorry, this service might be offline.',
        ];
      }
    },
  },
});
</script>
