<script setup>
import {ref, computed, defineEmits, defineProps} from 'vue'
import {useProductStore} from '@/stores/products.pinia'
import IconPlus from '@/components/icon/IconPlus.vue'
import IconMinus from '@/components/icon/IconMinus.vue'
import defImg from '@/assets/images/default_img.png'

const productStore = useProductStore()
const emit = defineEmits(['close'])

const props = defineProps({
  id: {
    type: Number,
  }
})
const product = computed(() => productStore.products.find((el) => el.id === props.id))

</script>

<template>

  <div class="modal-content">

    <p class="text-lg font-bold text-dark flex justify-center my-6">
      <span class=" text-center w-2/3">{{ product?.name }}</span>
    </p>
    <div class="flex items-center justify-center">
      <img :src="product?.img ? product.img : defImg " class="w-2/3 aspect-square"
           alt="">
    </div>

    <p class="text-dark text-base font-semibold my-6">{{ product?.price }} сум </p>

    <div class="flex gap-2 p-4 pt-0">
      <button :class="product?.quantity ? 'button-item' :'button-item cursor-not-allowed  opacity-50' "
              @click="productStore.decrementProduct(product?.id)">
        <icon-minus/>
      </button>

      <span class="button-item">{{ product?.quantity }} шт</span>

      <button class="button-item" @click="productStore.addToCart(product?.id)">
        <icon-plus/>
      </button>
    </div>

    <div class="w-full  flex items-center justify-between bg-white p-4 border-t border-gray-body">
      <div>
        <p class="text-dark font-bold text-xl"> {{ product?.quantity * product?.price }} сум</p>
      </div>
      <button @click="$emit('close')" class="bg-blue  text-white rounded-lg font-bold px-6 py-4">
        Готово
      </button>
    </div>
  </div>

</template>


<style lang="scss" scoped>

.button-item {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  width: 33%;
  border-radius: 10px;
  padding: 14px 0;
  background: #F1F2F5;
}

.modal-content {
  width: 100%;
  background: #fff;
  border-radius: 20px 20px 0 0;
  text-align: center;
}
</style>