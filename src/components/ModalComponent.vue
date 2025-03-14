<script setup>
import {defineProps, defineEmits, ref, watch} from 'vue';

const props = defineProps({
  open: Boolean,
  title: String,
  subtitle: String,
});

const emit = defineEmits(['update:open', 'ok']);

// Закрытие модального окна
const close = () => {
  emit('update:open', false);
};

// Подтверждение действия
const confirm = () => {
  emit('ok');
  close();
};

// Управление жестом "потянуть вниз для закрытия"
const touchStartY = ref(0);
const translateY = ref(0);
const isDragging = ref(false);

// Сброс `translateY` при открытии модалки
watch(() => props.open, (newVal) => {
  if (newVal) {
    translateY.value = 0;
  }
});

const handleTouchStart = (event) => {
  touchStartY.value = event.touches[0].clientY;
  isDragging.value = true;
};

const handleTouchMove = (event) => {
  if (!isDragging.value) return;
  const touchCurrentY = event.touches[0].clientY;
  const deltaY = touchCurrentY - touchStartY.value;

  if (deltaY > 0) {
    translateY.value = deltaY;
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;

  if (translateY.value > 150) {
    close();
  } else {
    translateY.value = 0;
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open" class="modal-overlay" @click.self="close">
        <Transition name="slide">
          <div
              v-if="open"
              class="modal-content"
              :style="{ transform: `translateY(${translateY}px)` }"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
          >
            <div class="modal-bar">
              <div class="modal-bar__touch"></div>
              <div v-if="props.subtitle" class="modal-bar__subtitle"> {{ props.subtitle }}</div>
            </div>

            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
/* Затемнение фона */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

/* Контент модального окна */
.modal-content {
  width: 100%;
  background: #fff;
  border-radius: 20px 20px 0 0;
  text-align: center;
  position: relative;
  transition: transform 0.2s ease-out;
}

.modal-body {
  border: none;
}

.modal-bar {
  justify-content: center;
  border-bottom: 1px solid #0000001A;

  &__subtitle {
    padding: 10px 0;
    font-weight: 500;
    font-size: 13px;
    text-align: center;
  }

  &__touch {
    margin: 10px auto;
    width: 70px;
    height: 5px;
    border-radius: 6px;
    background: #0000001A;
  }
}


/* Анимация затемнения фона */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* Анимация появления/ухода контента */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s linear;
}

.slide-enter-from {
  transform: translateY(100%);
}

.slide-leave-to {
  transform: translateY(100%);
}
</style>
