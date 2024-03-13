<script>
import api from "~/api/api.js";
import { PostData } from "~/DTO/PostData.js";

export default defineNuxtComponent({
  name: "PostsPage",
  data() {
    return {
      posts: [],
    };
  },
  head(nuxtApp) {
    return {
      title: 'Главная',
      meta: [
        { name: 'description', content: 'Здесь главная' },
        { name: 'keywords', content: 'seo-keywords' }
      ],
    }
  },
  async mounted() {
    try {
      const response = await api.get("/posts");

      this.posts = response.data.map(postRecord => new PostData(postRecord));
    } catch(err) {
      console.error(err);
    }
  }
})
</script>

<template>
  <h1>Главная</h1>
</template>

<style scoped>

</style>