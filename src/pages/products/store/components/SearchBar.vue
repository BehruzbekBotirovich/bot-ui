<template>
  <nav class="">
    <div class="bg-white p-3 pb-1">
      <!-- input -->
      <div class="relative w-full max-w-md">
        <svg class="absolute left-3 top-1/2  -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20"
             fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.25 14.5026C4.79822 14.5026 2 11.7045 2 8.25269C2 4.80091 4.79822 2.00269 8.25 2.00269C11.7018 2.00269 14.5 4.80091 14.5 8.25269C14.5 9.61766 14.0624 10.8804 13.3199 11.9084L17.2071 15.7955C17.5976 16.1861 17.5976 16.8192 17.2071 17.2098C16.8166 17.6003 16.1834 17.6003 15.7929 17.2098L11.9057 13.3226C10.8777 14.0651 9.61497 14.5026 8.25 14.5026ZM8.25 12.5026C10.5972 12.5026 12.5 10.5999 12.5 8.25269C12.5 5.90548 10.5972 4.00269 8.25 4.00269C5.90279 4.00269 4 5.90548 4 8.25269C4 10.5999 5.90279 12.5026 8.25 12.5026Z"
                fill="#272733" fill-opacity="0.32"/>
        </svg>
        <input type="text" placeholder="Поиск"
               class="w-full bg-gray-body pl-10 pr-4 py-2 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue"/>
      </div>
    </div>

    <!-- category -->
    <div class="flex gap-2 overflow-x-auto bg-white px-3">
      <button v-for="category in categories" :key="category" @click="selectCategory(category)" :class="[
                'p-2 text-sm text-nowrap font-medium  text-dark',
                activeCategory === category ? 'border-dark border-b-2' : 'text-gray category-link'
            ]">
        {{ category }}
      </button>
    </div>
  </nav>

</template>

<script setup>
import IconBack from "@/components/icon/IconBack.vue";
import {ref} from 'vue';

const activeCategory = ref('Все');
const categories = ['Все', 'Овощи', 'Фрукты', 'Продукты питания'];

const selectCategory = (category) => {
  activeCategory.value = category;
};

</script>

<style scoped>
.category-link {
  border-bottom: 2px solid transparent;
}
</style>