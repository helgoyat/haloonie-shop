<script setup lang="ts">
import { PropType, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { IBox, ITreat } from "@/types";
import { Treats } from "@/data";
import { getTreatTypeLabel } from "@/utils";
import SectionTitle from "@/components/Elements/SectionTitle.vue";

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
</script>

<template>
  <h2>{{ box.name }}</h2>
  <section-title title="Box" />
  <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
    <div
      class="w-full h-96 bg-cover bg-no-repeat bg-center rounded-xl shadow-sm"
      style="
        background-image: url(&quot;https://cf.degustabox.com/en/public/images/1709743155_db-uk-full-box-feb-2024-web-.jpg&quot;);
      "></div>
    <div class="rounded-xl p-6 border border-gray-200 flex flex-col gap-6">
      <div>{{ box.description }}</div>
      <div class="w-fit flex flex-row gap-2 py-2 px-4 rounded-md bg-amber-100 text-amber-600">
        <svg
          class="w-6 h-6 text-amber-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z" />
        </svg>
        <div>Surprise in the Box</div>
      </div>
    </div>
  </div>
  <section-title title="Treats" />
  <div
    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-start">
    <div
      v-for="item in treats"
      :key="item.name"
      class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
      <a
        class="cursor-pointer"
        :href="getLargerImagePath(item.image)"
        target="_blank">
        <div
          class="h-48 w-full bg-contain bg-no-repeat bg-center"
          :style="`background-image: url(${item.image})`"></div>
      </a>
      <div class="p-3">
        <div class="mb-2 text-right">
          <span
            class="text-sm text-red-600 font-medium bg-red-100 border border-red-600 rounded-sm pl-2 pr-1 py-1">
            {{ props.box.treats[item.id] }} x
          </span>
          <span
            class="ml-1 text-sm text-violet-600 font-medium border border-purple-600 rounded-sm px-2 py-1">
            {{ `${item.treatsPerIndividualBag} ${getTreatTypeLabel(item)}` }}
          </span>
        </div>
        <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
        <div>{{ item.brand }}</div>
        <div class="text-sm text-gray-500">{{ item.description }}</div>
        <div class="text-gray-400 mt-2 flex flex-row justify-between gap-2 items-center">
          <a class="text-sm hover:underline hover:cursor-pointer">See ingredients</a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center my-2">
    <template v-if="boxIds[box.id]">
      <div class="flex justify-center items-center border border-violet-200 p-2 rounded-full">
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
          class="select-none text-lg inline-flex items-center justify-center w-12 text-violet-700">
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
      </div>
    </template>
    <button
      v-else
      type="button"
      :disabled="isMaxBoxCount"
      class="px-6 py-3 text-base hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 disabled:bg-gray-100 disabled:text-gray-300 font-medium text-center text-white bg-violet-600 rounded-md"
      @click="addBox(box.id)">
      Add to cart
    </button>
  </div>
</template>

<style scoped>
.button-primary {
  @apply text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:ring-violet-300 disabled:bg-gray-100 disabled:text-gray-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center;
}
</style>
