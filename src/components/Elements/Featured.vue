<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { kebabCase } from "lodash";
import { ITreat, IBox } from "@/types";
import { Treats, Boxes, FeaturedTreats } from "@/data";

const router = useRouter();

const treats = computed((): ITreat[] => {
  return FeaturedTreats.map((id) => Treats.find((item) => item.id === id) || null).filter(
    (e) => !!e,
  ) as ITreat[];
});

const getTreatBoxes = (id: string): IBox[] => {
  const result = [];
  for (let item in Boxes) {
    if (Object.keys(Boxes[item].treats).includes(id)) {
      result.push(Boxes[item]);
    }
  }
  return result;
};

const goToBoxPage = (box: IBox) => {
  router.push({ name: "OurBoxesPage", params: { boxName: kebabCase(box.name) } });
};
</script>

<template>
  <div
    class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-start">
    <div
      v-for="item in treats"
      :key="item.name"
      class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
      <div
        class="h-48 w-full bg-contain bg-no-repeat bg-center"
        :style="`background-image: url(${item.image})`"></div>
      <div class="p-3">
        <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
        <div>{{ item.brand }}</div>
        <div class="text-sm text-gray-500">{{ item.description }}</div>
        <div
          v-if="getTreatBoxes(item.id).length > 0"
          class="flex flex-row flex-wrap gap-2 mt-3">
          <div
            v-for="element in getTreatBoxes(item.id)"
            class="text-sm text-amber-500 bg-white border border-amber-500 font-medium pl-2 pr-3 py-1 rounded hover:cursor-pointer inline-flex items-center gap-1"
            @click="goToBoxPage(element)">
            <svg
              class="w-6 h-6 text-amber-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
            {{ element.name }} Box
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
