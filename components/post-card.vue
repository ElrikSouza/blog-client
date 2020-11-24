<template>
  <div class="card">
    <nuxt-link :to="`posts/${post.user._id}`">{{
      post.user.username
    }}</nuxt-link>
    <div>{{ createdAt }}</div>
    <nuxt-link :to="`posts/${post._id}`">{{ post.title }}</nuxt-link>
    <div class="card__body">{{ post.body }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    post: {
      type: Object,
      default: () => ({
        _id: '',
        title: 'Loading...',
        body: 'Loading...',
        created_at: '',
        user: {
          _id: 'Loading...',
          username: 'Loading...',
        },
      }),
    },
  },
  computed: {
    createdAt() {
      return new Date(this.post.created_at).toLocaleString();
    },
  },
});
</script>
