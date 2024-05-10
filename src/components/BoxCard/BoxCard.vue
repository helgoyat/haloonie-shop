<script setup lang="ts">
import { PropType } from "vue";
import { useOrderStore } from "@/stores";
import { IBox } from "@/types";

const orderStore = useOrderStore();
const { addBox } = orderStore;

defineProps({
  box: {
    type: Object as PropType<IBox>,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-full max-w-sm bg-white ring-2 ring-gray-100 rounded-lg shadow-sm hover:ring-violet-400 transition-all">
    <a href="#">
      <img
        class="p-8 rounded-t-lg"
        src="https://flowbite.com/docs/images/products/apple-watch.png"
        alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900">
          {{ box.name }}
        </h5>
      </a>
      <div class="flex items-center justify-between mt-5">
        <span class="text-3xl font-bold text-gray-900">${{ box.price }}</span>
        <button
          type="button"
          class="text-white bg-violet-600 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center"
          @click.stop="addBox(box.id)">
          Add
        </button>
      </div>
    </div>
  </div>
</template>
