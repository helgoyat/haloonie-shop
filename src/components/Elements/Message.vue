<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col justify-items-center">
    <span class="text-gray-500 text-lg text-center">{{ text }}</span>
  </div>
</template>
