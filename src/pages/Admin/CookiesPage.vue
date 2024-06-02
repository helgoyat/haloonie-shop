<script setup lang="ts">
import { useRouter } from "vue-router";
import { kebabCase } from "lodash";
import { Treats, Boxes } from "@/data";
import { IBox } from "@/types";

const router = useRouter();

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
  router.push({ name: "BoxesPage", params: { boxType: box.type, boxName: kebabCase(box.name) } });
};
</script>

<template>
  <div class="content">
    <div class="grid grid-cols-4 gap-6 justify-items-center items-start">
      <div
        v-for="item in Treats"
        :key="item.name"
        class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
        <div
          class="h-48 w-full bg-contain bg-no-repeat bg-center"
          :style="`background-image: url(${item.image})`"></div>
        <div class="p-3">
          <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
          <div class="mb-2">{{ item.brand }}</div>
          <div
            v-if="getTreatBoxes(item.id).length > 0"
            class="flex flex-row flex-wrap gap-2">
            <div
              v-for="element in getTreatBoxes(item.id)"
              class="text-sm text-gray-800 bg-gray-200 font-medium px-3 py-1 rounded hover:cursor-pointer"
              @click="goToBoxPage(element)">
              {{ element.name }} Box
            </div>
          </div>
          <div
            v-else
            class="text-red-600">
            None
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
