<template>
  <div class="auth-grid">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.auth-grid {
  display: grid;
  margin: auto;
  height: 100%;
  width: 100%;
  max-width: 500px;
  text-align: center;
}
</style>
