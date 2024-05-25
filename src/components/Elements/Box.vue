<script setup lang="ts">
import { PropType, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { IBox, ICookie } from "@/types";
import { Cookies } from "@/data";
import HrTitle from "@/components/Elements/HrTitle.vue";

const props = defineProps({
  box: {
    type: Object as PropType<IBox>,
    required: true,
  },
});

const orderStore = useOrderStore();
const { boxIds } = storeToRefs(orderStore);
const { addBox, deleteBox, removeBox } = orderStore;

const cookies = computed((): ICookie[] => {
  if (!props.box) return [];
  return Object.keys(props.box.cookies)
    .map((id) => Cookies.find((item) => item.id === id) || null)
    .filter((e) => !!e) as ICookie[];
});

const onClickMinus = (id: string): void => {
  if (!props.box) return;
  if (boxIds.value[props.box.id] === 1) {
    deleteBox(id);
  } else {
    removeBox(id);
  }
};

const getLargerImagePath = (image: string): string => {
  return image.split("?")[0];
};
</script>

<template>
  <h2>{{ box.name }}</h2>
  <hr-title title="Cookies" />
  <div
    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-start">
    <div
      v-for="item in cookies"
      :key="item.name"
      class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
      <div
        class="h-48 w-full bg-contain bg-no-repeat bg-center"
        :style="`background-image: url(${item.image})`"></div>
      <div class="p-3">
        <div class="mb-2 text-right">
          <span
            class="text-sm text-orange-600 bg-orange-100 font-medium pl-2.5 pr-2 py-1 rounded-s-full">
            {{ box.cookies[item.id] * item.bag }}
            {{ box.cookies[item.id] * item.bag > 1 ? "units" : "unit" }}
          </span>
          <span
            class="text-sm text-violet-600 bg-violet-100 font-medium pr-2.5 pl-1.5 py-1 rounded-e-full">
            x {{ item.cookiesPerBag }} {{ item.cookiesPerBag > 1 ? "cookies" : "cookie" }}
          </span>
        </div>
        <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
        <div>{{ item.brand }}</div>
        <div class="text-gray-500 mt-2 flex flex-row justify-between gap-2 items-center">
          <a
            class="text-sm hover:underline hover:cursor-pointer"
            :href="getLargerImagePath(item.image)"
            target="_blank">
            See image
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center my-6">
    <template v-if="boxIds[box.id]">
      <button
        type="button"
        class="text-white bg-orange-500 font-medium rounded-l-full text-sm p-2.5 text-center inline-flex items-center"
        @click.stop="onClickMinus(box.id)">
        <svg
          class="w-7 h-7"
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
        class="py-1.5 px-3 border-2 border-orange-500 bg-orange-500 text-white flex items-center justify-center">
        {{ boxIds[box.id] }}
      </div>
      <button
        type="button"
        class="text-white bg-orange-500 font-medium rounded-r-full text-sm p-2.5 text-center inline-flex items-center"
        @click.stop="addBox(box.id)">
        <svg
          class="w-7 h-7"
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
      class="px-6 py-3 text-base font-medium text-center text-white bg-orange-500 rounded-md"
      @click="addBox(box.id)">
      Add to cart
    </button>
  </div>
</template>
