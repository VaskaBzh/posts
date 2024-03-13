// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});


export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    middleware: ['redirects']
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    routes: async () => {
      const { data } = await api.get('/posts');
      return data.map(post => `/posts/${post.id}`);
    }
  }
})
