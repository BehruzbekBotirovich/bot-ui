<script setup>
import IconPlus from "@/components/icon/IconPlus.vue";
import IconMinus from "@/components/icon/IconMinus.vue";
import {formatAmount} from "@/helpers/amount";
import defImg from '@/assets/images/default_img.png'
import {useProductStore} from "@/stores/products.pinia.js";

const productStore = useProductStore();
const props = defineProps({
  product: {
    type: Object,
  }
})

</script>

<template>
  <div class="p-[10px] h-fit rounded-lg bg-white">
    <div class="mb-1">
      <img :src="product.img ? product.img : defImg " class="w-full aspect-square rounded-md"
           alt="product_img">
    </div>
    <div class="mb-2">
      <h3 class="text-sm truncate ">{{ product.name }}</h3>
      <div class="text-sm text-bold text-dark ">{{ formatAmount(product.price) }} cум</div>
    </div>
    <div>
      <button @click=" productStore.addToCart(product.id)" v-if="product.quantity == 0"
              class="bg-gray-light py-3 text-sm w-full rounded-md">
        Добавить
      </button>
      <div v-if="product.quantity > 0"
           class="bg-gray-light p-[6px]  text-sm w-full rounded-md flex justify-between items-center">
        <button @click="productStore.decrementProduct(product.id)" class="p-2 bg-white rounded-[4px]">
          <icon-minus/>
        </button>
        <span class="text-sm text-dark">{{ product.quantity }} шт</span>
        <button @click="productStore.addToCart(product.id)" class="p-2 bg-white rounded-[4px]">
          <icon-plus/>
        </button>
      </div>
    </div>
  </div>

</template>
<style></style>