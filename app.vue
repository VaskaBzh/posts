<template>
  <div>
    <header style="display: flex; justify-content: space-between; gap: 12px;">
      <router-link to="/posts">Список</router-link>
      <router-link to="/">Главная с аккаунтом - {{ user?.name ?? "..." }}</router-link>
    </header>
    <NuxtPage />
  </div>
</template>

<script>
import api from "~/api/api.js";

export default {
  name: 'App',
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    try {
      const response = await api.get("/profile");

      this.user = response.data;
    } catch(err) {
      console.error(err);
    }
  }
}
</script>