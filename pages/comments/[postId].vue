<script>
import api from "~/api/api.js";
import { CommentData } from "~/DTO/CommentData.js";

export default defineNuxtComponent({
  name: "CommentsPage",
  data() {
    return {
      comments: [],
    };
  },
  head(nuxtApp) {
    return {
      title: 'Комментарии',
      meta: [
        { name: 'description', content: `Смотрите все комментарии поста ${nuxtApp._route.params.postId}` },
        { name: 'keywords', content: 'seo-keywords' }
      ],
    }
  },
  methods: {
    async getCommentsByPostId() {
      try {
        const response = await api.get(`/comments?postId=${this.$route.params.postId}`);

        this.comments = response.data.map(commentRecord => new CommentData(commentRecord));
      } catch(err) {
        console.error(err);
      }
    }
  },
  async mounted() {
    await this.getCommentsByPostId();
  }
})
</script>

<template>
  <div>
    <h1>Комменты поста {{ $route.params.postId }}</h1>
    <div
        style="
          border-radius: 16px;
          border: 1px solid gray;
          display: block;
          padding: 24px;
        "
        v-for="(comment, index) in comments"
        :key="comment.id"
    >
      <p>Коммент номер {{ index + 1 }}</p>
      <p>{{ comment.text }}</p>
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>