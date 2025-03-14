<template>
  <div class="bg-white flex items-center justify-between p-3 border-b border-gray-light">
    <button class="p-2" @click="router.back();">
      <icon-back/>
    </button>
    <div class="text-dark font-semibold">
      Корзинка
    </div>
    <button class="p-2" @click="clean">
      <icon-trash/>
    </button>
  </div>

  <div>
    <div v-for="el in productStore.cart" :key="el.id" class="flex items-center gap-2 py-3 px-4 bg-white relative">
      <div>
        <div class="w-[50px]">
          <img :src="el.img ? el.img : '/src/assets/images/default_img.png'" class="aspect-square w-[50px]"
               alt="product_img">
        </div>
      </div>
      <div class="w-3/5">
        <h3 class="text-dark text-md truncate">{{ el.name }}</h3>
        <p class="text-dark font-bold text-md">{{ formatAmount(el.price) }} cум</p>
      </div>
      <div @click="openModal(el.id)"
           class="bg-blue/10 py-2 text-center text-blue font-bold  w-16 rounded-lg ml-auto">
        {{ el.quantity }} шт
      </div>
      <div class="border-line"></div>
    </div>

  </div>

  <div v-if="productStore.cart.length > 0"
       class="fixed w-full bottom-0 left-0  flex items-center justify-between bg-white p-4  mt-2">
    <div>
      <p class="text-dark font-bold text-xl"> {{ formatAmount(allSumm) }} сум</p>
    </div>

    <button @click="checkout" class="bg-blue  text-white rounded-lg font-bold px-6 py-4">
      Оплата
    </button>
  </div>

  <div v-if="productStore.cart.length == 0" class="fixed w-full bottom-0 left-0 p-3 bg-white">
    <p class="text-center text-gray text-md ">Корзина пуста</p>
  </div>

  <modal-component v-model:open="showModal">
    <ItemDetails :id="selectedProductId" @close="showModal=false"></ItemDetails>
  </modal-component>

</template>

<script setup>
import {useProductStore} from '@/stores/products.pinia';
import {useRouter} from 'vue-router';
import {computed, ref} from 'vue';
import {formatAmount} from '@/helpers/amount';
import ModalComponent from '@/components/ModalComponent.vue';
import ItemDetails from './components/ItemDetails.vue';

const showModal = ref(false);
const selectedProductId = ref(null);

const openModal = (id) => {
  selectedProductId.value = id;
  showModal.value = true;
}

// icons
import IconTrash from '@/components/icon/IconTrash.vue';
import IconBack from '@/components/icon/IconBack.vue';

const router = useRouter();
const productStore = useProductStore();

const clean = () => {
  productStore.products.forEach((item) => {
    item.quantity = 0
  });
  productStore.cart = [];
}

const allSumm = computed(() =>
    productStore.cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
);

const checkout = () => {
  console.log('Proceeding to checkout...')
}
</script>

<style lang="scss" scoped>
.border-line {
  position: absolute;
  right: 16px;
  bottom: 0;
  width: calc(100% - 90px);
  height: 0.5px;
  background-color: #0000001A;
}
</style>