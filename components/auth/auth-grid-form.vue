<template>
  <div class="auth-grid-form"><slot /></div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.auth-grid-form > :last-child {
  margin-top: 1rem;
}
</style>
