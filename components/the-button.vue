<template>
  <button
    class="btn"
    :class="{
      'btn--primary': color == 'primary',
      'btn--secondary': color == 'secondary',
    }"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
});
</script>

<style scoped>
.btn {
  padding: 1rem;
  min-width: 10rem;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 4px;
  transition: background-color 300ms;
}

.btn--primary {
  background-color: var(--primary-color);
}

.btn--primary:hover,
.btn--primary:active {
  background-color: var(--primary-color-dark);
}

.btn--secondary {
  background-color: var(--secondary-color);
}

.btn--secondary:hover,
.btn--secondary:active {
  background-color: var(--secondary-color-dark);
}
</style>
