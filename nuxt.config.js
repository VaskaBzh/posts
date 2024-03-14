// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});

console.log(api)
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    routes: async () => {
      let routes = [
          '/',
          '/posts',
      ];
      const { data } = await api.get('/posts');
      routes = [
        ...routes,
        ...data.map(post => `/posts/${post.id}`),
        ...data.map(post => `/comments/${post.id}`)
      ]
      return routes;
    }
  }
})
