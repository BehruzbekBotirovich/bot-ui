<script setup>
import { computed, onMounted , ref} from "vue";
import { useProductStore } from "@/stores/products.pinia";
import { useRouter } from "vue-router";
import { formatAmount } from "@/helpers/amount";
// components
import ProductCard from "./components/ProductCard.vue";
import SearchBar from "./components/SearchBar.vue";

import { useRoute } from 'vue-router';
const test2 = ref()
onMounted(() => {
  test2.value = window?.Telegram ? JSON.stringify(window?.Telegram?.WebApp?.initDataUnsafe) : null
  console.log(window?.Telegram)
})

const route = useRoute();
const dataQuery = route.query;

const router = useRouter();
const productStore = useProductStore();

const isCartNotEmpty = computed(() => productStore.cart.length > 0);

</script>

<template>
  <div class="relative">
    <SearchBar />
    {{ dataQuery }}
    {{ test2 }}

    <div :class="[isCartNotEmpty ? 'products-wrapper' : 'wrapper', 'grid grid-cols-2 gap-2 overflow-y-auto p-3']">
      <ProductCard v-for="item in productStore.products" :product="item" :key="item.id" />
    </div>

    <!-- cart bottom info -->
    <div v-if="isCartNotEmpty" class="w-full flex items-center justify-between bg-white p-4 mt-2">
      <div>
        <h3 class="text-gray-dark">{{ productStore.totalCartCount }} товара</h3>
        <p class="text-dark font-bold text-xl">{{ productStore.totalCartSum }} сум</p>
      </div>

      <router-link to="products/cart">
        <button class="bg-blue text-white rounded-lg font-bold px-6 py-4">Корзина</button>
      </router-link>
    </div>

    <div v-else class="w-full p-3 bg-white">
      <p class="text-center text-gray text-md">Корзина пуста</p>
    </div>
  </div>
</template>

<style>
.products-wrapper {
  height: calc(100vh - 193px);
}

.wrapper {
  height: calc(100vh - 142px);
}
</style>