<template>

  <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_389_53128)">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.00005 0.802368C7.503 0.802368 7.10005 1.20531 7.10005 1.70237V7.10237H1.70005C1.20299 7.10237 0.800049 7.50531 0.800049 8.00237C0.800049 8.49942 1.20299 8.90237 1.70005 8.90237H7.10005V14.3023C7.10005 14.7994 7.503 15.2023 8.00005 15.2023C8.49711 15.2023 8.90005 14.7994 8.90005 14.3023V8.90237H14.3001C14.7971 8.90237 15.2001 8.49942 15.2001 8.00237C15.2001 7.50531 14.7971 7.10237 14.3001 7.10237H8.90005V1.70237C8.90005 1.20531 8.49711 0.802368 8.00005 0.802368Z"
            :fill="color"/>
    </g>
    <defs>
      <clipPath id="clip0_389_53128">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
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