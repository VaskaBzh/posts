<script>
import api from "~/api/api";
import { PostData } from "~/DTO/PostData";

export default defineNuxtComponent({
  name: "TargetPostPage",
  data() {
    return {
      post: {},
    };
  },
  head({ _route }) {
    return {
      title: _route.query.seo_title,
      meta: [
        { name: 'description', content: _route.query.seo_description },
        { name: 'keywords', content: _route.query.seo_keywords }
      ],
    }
  },
  methods: {
    async getPost() {
      try {
        const response = await api.get(`/posts/${this.$route.params.id}`);

        this.post = new PostData(response.data);
      } catch(err) {
        console.error(err);
      }
    },
  },
  async mounted() {
    await this.getPost();
  }
})
</script>

<template>
  <div
      style="
          display: flex;
          flex-direction: column;
          gap: 24px;
       "
  >
    <div
        v-if="Object.entries(post).length > 0"
        style="
          padding: 24px;
          border-radius: 16px;
          border: 1px solid gray;
          display: block;
       "
    >
      <p>{{ post.title }}</p>
      <p>{{ post.description }}</p>
      <p>Показы: {{ post.views }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>