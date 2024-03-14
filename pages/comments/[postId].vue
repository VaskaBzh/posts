<script>
import api from "~/api/api.js";
import { CommentData } from "~/DTO/CommentData.js";

export default defineNuxtComponent({
  name: "CommentsPage",
  head({ _route }) {
    return {
      title: 'Комментарии',
      meta: [
        { name: 'description', content: `Смотрите все комментарии поста ${_route.params.postId}` },
        { name: 'keywords', content: 'seo-keywords' }
      ],
    }
  },
  async asyncData({ _route }) {
	  try {
		  const response = await api.get(`/comments?postId=${useRoute().params.postId}`);
		  
		  return { comments: response.data };
	  } catch(err) {
		  console.error(err);
		  return { comments: [] };
	  }
  },
  mounted() {
	this.comments = this.comments.map(commentRecord => new CommentData(commentRecord))
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