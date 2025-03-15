<template>

  <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1.70005 7.10229C1.20299 7.10229 0.800049 7.50523 0.800049 8.0023C0.800049 8.49935 1.20299 8.9023 1.70005 8.9023H14.3C14.7971 8.9023 15.2001 8.49935 15.2001 8.0023C15.2001 7.50523 14.7971 7.10229 14.3 7.10229H1.70005Z"
        :fill="color"/>
  </svg>

</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: '#272733'
  },
})
</script>

<style></style>