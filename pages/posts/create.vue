<template>
  <div class="create-post-grid">
    <h1>Publicar novo Post</h1>
    <the-input v-model="postTitle" :placeholder="Titulo" />
    <textarea v-model="postBody" placeholder="Corpo do post" />
    <the-button @click="submit">Criar</the-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheButton from '~/components/the-button.vue';
import theInput from '~/components/the-input.vue';
import { getAuthParams } from '~/helpers/auth';

export default Vue.extend({
  components: { theInput, TheButton },
  data() {
    return {
      postTitle: '',
      postBody: '',
    };
  },
  methods: {
    async submit() {
      const payload = { title: this.postTitle, body: this.postBody };

      const { data } = await this.$axios.post(
        'posts',
        payload,
        getAuthParams()
      );

      this.$router.push(`/posts/${data.newPostId}`);
    },
  },
});
</script>
