<template>
  <div class="post-grid">
    <h1 class="post-grid__title">{{ title }}</h1>
    <nuxt-link :to="`profiles/${authorId}`" class="post-grid__author">
      Written by {{ authorName }} - {{ createdAt }}
    </nuxt-link>
    <main class="post-grid__body">{{ body }}</main>

    <client-only>
      <nav v-if="isUserTheOwnerOfThePost">
        <the-button @click="deletePost">Remover Post</the-button>
        <nuxt-link :to="`/posts/edit/${postId}`">Editar Post</nuxt-link>
      </nav>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getAuthParams, getUserId } from '~/helpers/auth';

export default Vue.extend({
  async fetch() {
    const { data } = await this.$axios.get(`posts/${this.postId}`);

    this.title = data.post.title;
    this.body = data.post.body;
    this.authorId = data.post.user._id;
    this.authorName = data.post.user.username;
    this.createdAt = new Date(data.post.created_at).toLocaleString();
  },

  data() {
    return {
      title: 'Loading ...',
      body: 'Loading ...',
      createdAt: '',
      authorId: '',
      authorName: 'Loading ...',
      userId: '',
    };
  },
  computed: {
    isUserTheOwnerOfThePost(): boolean {
      return this.userId === this.authorId;
    },
    postId() {
      return this.$route.params.id;
    },
  },
  beforeMount() {
    const currentUserId = getUserId();
    if (currentUserId) {
      this.userId = currentUserId;
    }
  },
  methods: {
    async deletePost() {
      await this.$axios.delete(`/posts/${this.postId}`, getAuthParams());

      this.$router.push('/posts');
    },
  },
});
</script>

<style scoped>
.post-grid {
  display: grid;
  grid-template-rows: 2rem 1rem auto;
  gap: 1rem 0;
  text-align: center;
  padding: 1.5rem;
  color: #1b1b1b;
  height: 100%;
  width: 100%;
}

.post-grid__title {
  font-size: 2rem;
  text-transform: capitalize;
}

.post-grid__author {
  opacity: 0.9;
  font-size: 1rem;
  color: inherit;
}

.post-grid__body {
  white-space: pre-line;
  margin: auto;
  max-width: 600px;
  width: 80%;
  line-height: 125%;
  text-align: justify;
}
</style>
