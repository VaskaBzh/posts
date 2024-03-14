<script>
import api from "~/api/api";
import { PostData } from "~/DTO/PostData";

export default defineNuxtComponent({
  name: "TargetPostPage",
  head({ _route }) {
    return {
      title: _route.query.seo_title,
      meta: [
        { name: 'description', content: _route.query.seo_description },
        { name: 'keywords', content: _route.query.seo_keywords }
      ],
    }
  },
  async asyncData() {
  	try {
  		const response = await api.get(`/posts/${useRoute().params.id}`);
  		
  		return { post: response.data };
  	} catch(err) {
  		console.error(err);
  		return { post: _route.params.id };
  	}
  },
  mounted() {
	this.post = new PostData(this.post)
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