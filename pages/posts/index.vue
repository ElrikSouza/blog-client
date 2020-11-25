<template>
  <div>
    <h1>Index</h1>
    <post-card
      v-for="post in posts[currentPage]"
      :key="post._id"
      :post="post"
    />
    <button :disabled="isPrevDisabled" @click="prevPage">prev</button>
    <button :disabled="isNextDisabled" @click="nextPage">next</button>
    <nuxt-link to="/posts/create">Criar novo post</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import postCard from '~/components/post-card.vue';

export default Vue.extend({
  components: { postCard },
  async fetch() {
    await this.getData();
  },
  data() {
    return {
      posts: [] as object[],
      next: '',
      currentPage: -1,
    };
  },
  computed: {
    isNextDisabled(): boolean {
      return this.next === '';
    },
    isPrevDisabled(): boolean {
      return this.currentPage <= 0;
    },
  },
  methods: {
    async getData() {
      const params =
        this.next !== '' ? { params: { params: this.next } } : undefined;
      const {
        data: { posts },
      } = await this.$axios.get('posts', params);

      this.posts.push(posts.page);
      this.next = posts.next || '';
      this.currentPage++;
    },
    async nextPage() {
      if (this.posts.length - 1 === this.currentPage) {
        await this.getData();
        return;
      }

      this.currentPage++;
    },
    prevPage() {
      if (this.currentPage === 0) {
        return;
      }

      this.currentPage--;
    },
  },
});
</script>
