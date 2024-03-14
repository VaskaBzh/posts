<script>
import api from "~/api/api.js";
import { PostData } from "~/DTO/PostData.js";

export default defineNuxtComponent({
	name: "PostsPage",
	async asyncData() {
		try {
			const response = await api.get("/posts");
			return { posts: response.data };
		} catch (error) {
			console.error("Ошибка при загрузке постов:", error);
			return { posts: [] };
		}
	},
	head(nuxtApp) {
		return {
			title: 'Посты',
			meta: [
				{ name: 'description', content: 'Смотрите все посты здесь!' },
				{ name: 'keywords', content: 'seo-keywords' }
			],
		}
	},
	mounted() {
		this.posts = this.posts.map(postRecord => new PostData(postRecord));
	}
})
</script>

<template>
  <div>
    <h1>Посты</h1>
    <div
        style="
          border-radius: 16px;
          border: 1px solid gray;
          display: block;
        "
        v-for="(post, index) in posts"
        :key="post.id"
    >
      <router-link
          style="
            padding: 24px;
            display: block;
          "
          :to="
          {
            path: `/posts/${post.id}`,
            query: {
              seo_title: post.seo_title,
              seo_description: post.seo_description,
              seo_keywords: post.seo_keywords
            }
          }
        "
      >
        <p>{{ post.title }}</p>
        <p>{{ post.description }}</p>
        <p>Показы: {{ post.views }}</p>
      </router-link>
      <router-link
          style="
            margin: 6px 24px 24px;
            padding: 0 12px;
            border-radius: 16px;
            background: gray;
            color: white;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: 36px;
          "
          :to="
          {
            path: `/comments/${post.id}`,
            query: {
              seo_title: post.seo_title,
              seo_description: post.seo_description,
              seo_keywords: post.seo_keywords
            }
          }
        "
      >
        Комментарии
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>