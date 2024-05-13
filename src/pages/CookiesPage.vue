<script setup lang="ts">
import { Cookies } from "@/data";
</script>

<template>
  <div class="content">
    <div class="grid grid-cols-4 gap-6 justify-items-center items-start">
      <div
        v-for="item in Cookies"
        :key="item.name"
        class="w-full rounded ring-2 ring-gray-100 hover:ring-gray-200 transition-all p-2"
        :class="!item.active && 'opacity-40'">
        <div
          class="h-48 w-full bg-contain bg-no-repeat bg-center"
          :style="`background-image: url(${item.image})`"></div>
        <div class="p-3">
          <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
          <div>{{ item.brand }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
