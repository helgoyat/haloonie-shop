<script setup lang="ts">
import { PropType, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { IBox, ITreat } from "@/types";
import { Treats } from "@/data";
import { getTreatTypeLabel } from "@/utils";
import HrTitle from "@/components/Elements/HrTitle.vue";

const props = defineProps({
  box: {
    type: Object as PropType<IBox>,
    required: true,
  },
});

const orderStore = useOrderStore();
const { boxIds, isMaxBoxCount } = storeToRefs(orderStore);
const { addBox, deleteBox, removeBox } = orderStore;

const treats = computed((): ITreat[] => {
  if (!props.box) return [];
  return Object.keys(props.box.treats)
    .map((id) => Treats.find((item) => item.id === id) || null)
    .filter((e) => !!e) as ITreat[];
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

const getTreatQuantityLabel = (treat: ITreat) => {
  return `${props.box.treats[treat.id] * treat.bag} x ${treat.treatsPerBag} ${getTreatTypeLabel(
    treat,
  )}`;
};
</script>

<template>
  <h2>{{ box.name }}</h2>
  <hr-title title="Box" />
  <div class="grid grid-cols-2 gap-6">
    <div
      class="w-full h-96 bg-cover bg-no-repeat bg-center rounded-xl shadow-sm"
      :style="`background-image: url('https://cf.degustabox.com/en/public/images/1709743155_db-uk-full-box-feb-2024-web-.jpg')`"></div>
    <div class="rounded-xl p-4 border border-gray-200">Description</div>
  </div>
  <hr-title title="Treats" />
  <div
    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-start">
    <div
      v-for="item in treats"
      :key="item.name"
      class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
      <div
        class="h-48 w-full bg-contain bg-no-repeat bg-center"
        :style="`background-image: url(${item.image})`"></div>
      <div class="p-3">
        <div class="mb-2 text-right">
          <span class="text-sm text-violet-600 font-medium">
            {{ getTreatQuantityLabel(item) }}
          </span>
        </div>
        <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
        <div>{{ item.brand }}</div>
        <div class="text-sm text-gray-500">{{ item.description }}</div>
        <div class="text-gray-400 mt-2 flex flex-row justify-between gap-2 items-center">
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
  <div class="flex justify-center items-center my-2">
    <template v-if="boxIds[box.id]">
      <div class="flex justify-center items-center border border-violet-200 p-[5px] rounded-full">
        <button
          type="button"
          class="text-white bg-violet-600 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
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
          class="select-none text-lg inline-flex items-center justify-center w-12 text-violet-700">
          {{ boxIds[box.id] }}
        </div>
        <button
          type="button"
          :disabled="isMaxBoxCount"
          class="text-white bg-violet-600 disabled:bg-gray-100 disabled:text-gray-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
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
    </template>
    <button
      v-else
      type="button"
      :disabled="isMaxBoxCount"
      class="px-6 py-3 text-base disabled:bg-gray-100 disabled:text-gray-300 font-medium text-center text-white bg-violet-600 rounded-md"
      @click="addBox(box.id)">
      Add to cart
    </button>
  </div>
</template>
