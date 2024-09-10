<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="inline-flex items-center justify-center w-full">
    <hr class="w-80 h-px my-8 bg-violet-300 border-0" />
    <span class="absolute px-3 brand text-2xl text-violet-600 -translate-x-1/2 bg-white left-1/2">
      {{ title }}
    </span>
  </div>
</template>
