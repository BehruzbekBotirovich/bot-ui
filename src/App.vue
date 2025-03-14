<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';

const tg = window.Telegram.WebApp; // Получаем объект Telegram Web App
const user = ref(null);

onMounted(() => {
  tg.expand(); // Разворачиваем Web App на весь экран
  user.value = tg.initDataUnsafe?.user || null; // Получаем данные пользователя из Telegram
});
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
