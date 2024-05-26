<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { kebabCase } from "lodash";
import { ICookie, IBox } from "@/types";
import { Cookies, Boxes, FeaturedCookies } from "@/data";

const router = useRouter();

const cookies = computed((): ICookie[] => {
  return FeaturedCookies.map((id) => Cookies.find((item) => item.id === id) || null).filter(
    (e) => !!e,
  ) as ICookie[];
});

const getCookieBoxes = (cookieId: string): IBox[] => {
  const result = [];
  for (let item in Boxes) {
    if (Object.keys(Boxes[item].cookies).includes(cookieId)) {
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
  <div class="grid grid-cols-4 gap-6 justify-items-center items-start">
    <div
      v-for="item in cookies"
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
          v-if="getCookieBoxes(item.id).length > 0"
          class="flex flex-row flex-wrap gap-2 mt-3">
          <div
            v-for="element in getCookieBoxes(item.id)"
            class="text-sm text-white bg-amber-500 font-medium px-3 py-1 rounded hover:cursor-pointer"
            @click="goToBoxPage(element)">
            {{ element.name }} Box
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
