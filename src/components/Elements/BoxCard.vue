<script setup lang="ts">
import { PropType } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { IBox } from "@/types";

const orderStore = useOrderStore();
const { boxIds, isMaxBoxCount } = storeToRefs(orderStore);
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
    class="w-full max-w-sm bg-white ring-1 ring-gray-100 hover:ring-gray-200 rounded-lg shadow-sm transition-all cursor-pointer">
    <div class="p-8">
      <div
        class="h-48 w-full bg-contain bg-no-repeat bg-center"
        :style="`background-image: url(${box.image})`"></div>
    </div>
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
              class="button-primary"
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
            <div
              class="select-none text-lg inline-flex items-center justify-center w-8 text-violet-700">
              {{ boxIds[box.id] }}
            </div>
            <button
              type="button"
              :disabled="isMaxBoxCount"
              class="button-primary"
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
            :disabled="isMaxBoxCount"
            class="button-primary"
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

<style scoped>
.button-primary {
  @apply text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 disabled:bg-gray-100 disabled:text-gray-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center;
}
</style>
