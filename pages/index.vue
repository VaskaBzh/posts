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
})
</script>

<template>
  <h1>Главная</h1>
</template>

<style scoped>

</style>