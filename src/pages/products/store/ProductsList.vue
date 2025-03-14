<script setup>
import { computed } from "vue";
import { useProductStore } from "@/stores/products.pinia";
import { useRouter } from 'vue-router';
import { formatAmount } from "@/helpers/amount";
// components
import ProductCard from "./components/ProductCard.vue";
import SearchBar from "./components/SearchBar.vue";

const router = useRouter();

const productStore = useProductStore();
const allSumm = computed(() =>
    productStore.cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
);
</script>

<template>
    <search-bar />

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-3 mb-8 ">
        <ProductCard />
    </div>

    <div v-if="productStore.cart.length > 0"
        class="fixed w-full bottom-0 left-0  flex items-center justify-between bg-white p-4  mt-2">
        <div>
            <h3 class="text-gray-dark"> {{ productStore.cart.length }} товара </h3>
            <p class="text-dark font-bold text-xl"> {{ formatAmount(allSumm) }} сум</p>
        </div>

        <router-link to="products/cart">
            <button class="bg-blue  text-white rounded-lg font-bold px-6 py-4">Корзина
            </button>
        </router-link>
    </div>

    <div v-if="productStore.cart.length == 0" class="fixed w-full bottom-0 left-0 p-3 bg-white">
        <p class="text-center text-gray text-md ">Корзина пуста</p>
    </div>
</template>

<style></style>