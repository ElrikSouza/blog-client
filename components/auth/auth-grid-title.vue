<template>
  <h1 class="auth-grid-title"><slot /></h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.auth-grid-title {
  text-transform: uppercase;
  font-size: 2.5rem;
  margin: auto;
}
</style>
