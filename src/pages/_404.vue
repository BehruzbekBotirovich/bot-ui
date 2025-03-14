<script setup>


</script>

<template>
  <div class="page-404">
    <img
      src="https://st3.depositphotos.com/9207970/14560/v/450/depositphotos_145609379-stock-illustration-error-page-404-infographic-icon.jpg"
      alt="">
    <a-row justify="center" class="w-100">
      <a-col :xs="24" :sm="24" :lg="12" :xl="8">
        <h1 class="mb-0 text-center">
          Qadirli foydalanuvchi!
        </h1>
        <p class="my-3 mx-auto text-center text-muted">
          Sizning so'ro'vingiz bo'yicha sahifa topilmadi.
          Bunday sahifa mavjud emas yoki tizim adminsitratori tomonidan o'chirib yuborilgan
        </p>
        <p class="text-center">
          <b>Keltirilgan noqulayliklar uchun uzur!</b>
        </p>
        <div class="text-center">
          <router-link :to="isToken ? '/board' : '/'">
            <a-button type="primary">
              Bosh sahifaga qaytish
            </a-button>
          </router-link>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.page-404 {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .w-100 {
    width: 100%;
  }

  p {
    line-height: 20px;
  }

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }
}
</style>