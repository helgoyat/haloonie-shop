<script setup lang="ts">
import { ref } from "vue";

const cookies = ref<string[]>([
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dw76e48d62/5900951251818_H1L1_7219122_S10.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwdb7ff4d0/3017760002905_H1N1_800367_S10.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwe19282d0/3061990142214_A1N1_5405800_S13.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dw1abe1a76/7622210422163_H1N1_21334_S10.png",
]);
</script>

<template>
  <div class="grid grid-cols-4 gap-6 justify-items-center">
    <div
      v-for="item in cookies"
      :key="item"
      class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all">
      <div
        class="h-48 w-full bg-contain bg-no-repeat bg-center"
        :style="`background-image: url(${item})`"></div>
      <div class="p-5">
        <div class="text-lg font-semibold tracking-tight text-gray-900">Product Name</div>
        <div>Brand</div>
      </div>
    </div>
  </div>
</template>
