<script setup>
import { useProductStore } from "@/stores/products.pinia";
import IconPlus from "@/components/icon/IconPlus.vue";
import IconMinus from "@/components/icon/IconMinus.vue";
import { formatAmount } from "@/helpers/amount";

const productStore = useProductStore();

</script>

<template>
    <!-- skeleton -->
    <div class="p-[10px] rounded-md bg-white">
        <div class="w-full skeleton-bg aspect-square  "></div>
        <div class="mb-3">
            <div class="h-4 w-full skeleton-bg  mt-2 mb-1"></div>
            <div class="h-4 w-3/5 skeleton-bg "></div>
        </div>
        <div class="skeleton-bg h-10 w-full "> </div>
    </div>

    <div v-for="el in productStore.products" :key="el.id" class="p-[10px] rounded-lg bg-white">
        <div class="mb-1">
            <img :src="el.img ? el.img : '/src/assets/images/default_img.png'" class="w-full aspect-square rounded-md"
                alt="product_img">
        </div>
        <div class="mb-2">
            <h3 class="text-sm truncate ">{{ el.name }}</h3>
            <div class="text-sm text-bold text-dark ">{{ formatAmount(el.price) }} cум</div>
        </div>
        <div>
            <button @click=" productStore.addToCart(el.id)" v-if="el.quantity == 0"
                class="bg-gray-light py-3 text-sm w-full rounded-md">
                Добавить</button>
            <div v-if="el.quantity > 0"
                class="bg-gray-light p-[6px]  text-sm w-full rounded-md flex justify-between items-center">
                <button @click="productStore.decrementProduct(el.id)" class="p-2 bg-white rounded-[4px]">
                    <icon-minus />
                </button>
                <span class="text-sm text-dark">{{ el.quantity }} шт</span>
                <button @click="productStore.addToCart(el.id)" class="p-2 bg-white rounded-[4px]">
                    <icon-plus />
                </button>
            </div>
        </div>
    </div>

</template>
<style></style>