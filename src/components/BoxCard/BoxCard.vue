<script setup lang="ts">
import { PropType } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { IBox } from "@/types";

const orderStore = useOrderStore();
const { boxIds } = storeToRefs(orderStore);
const { addBox, removeBox, deleteBox } = orderStore;

const props = defineProps({
  box: {
    type: Object as PropType<IBox>,
    required: true,
  },
});

const onClickMinus = (id: string): void => {
  if (boxIds.value[props.box.id] === 1) {
    deleteBox(id);
  } else {
    removeBox(id);
  }
};
</script>

<template>
  <div
    class="w-full max-w-sm bg-white ring-2 ring-gray-100 rounded-lg shadow-sm hover:ring-violet-400 transition-all cursor-pointer">
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
        <div class="flex items-center">
          <template v-if="boxIds[box.id]">
            <button
              type="button"
              class="text-white bg-violet-600 font-medium rounded-l-full text-sm p-2.5 text-center inline-flex items-center"
              @click.stop="onClickMinus(box.id)">
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14" />
              </svg>
            </button>
            <div class="py-1.5 border-2 border-violet-600 bg-violet-600 text-white">
              {{ boxIds[box.id] }}
            </div>
            <button
              type="button"
              class="text-white bg-violet-600 font-medium rounded-r-full text-sm p-2.5 text-center inline-flex items-center"
              @click.stop="addBox(box.id)">
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5" />
              </svg>
            </button>
          </template>
          <button
            v-else
            type="button"
            class="text-white bg-violet-600 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
            @click.stop="addBox(box.id)">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-7 7V5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
