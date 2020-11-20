<template>
  <transition name="fade">
    <ul v-show="errors.length" class="error-list">
      <li v-for="error in errors" :key="error" class="error-list__item">
        {{ error }}
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.error-list {
  padding: 0;
  list-style: none;
}

.error-list__item {
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  color: var(--danger-color);
  text-align: left;
  margin-bottom: 0.5rem;
}

.error-list__item:last-child {
  margin-bottom: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
