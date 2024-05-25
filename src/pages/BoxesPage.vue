<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { kebabCase, startCase, camelCase } from "lodash";
import { useRootStore } from "@/stores";
import { Boxes } from "@/data";
import { BoxTypeEnum, IBox } from "@/types";
import BoxCard from "@/components/Elements/BoxCard.vue";
import Box from "@/components/Elements/Box.vue";

const router = useRouter();
const route = useRoute();

const rootStore = useRootStore();
const { box } = storeToRefs(rootStore);

const boxes = computed((): IBox[] => {
  return Boxes.filter((item) => item.type === route.params.boxType);
});

const isCollections = computed(() => route.params.boxType === BoxTypeEnum.Collection);

const isSpecials = computed(() => route.params.boxType === BoxTypeEnum.Special);

const goToBoxPage = (boxName: string) => {
  router.push({
    name: "BoxesPage",
    params: { ...route.params, boxName: kebabCase(boxName) },
  });
};
</script>

<template>
  <div class="content">
    <template v-if="!box">
      <h2>{{ startCase(camelCase((route.params.boxType as string).replace("-", " "))) }}</h2>
      <h6 v-if="isCollections || isSpecials">
        {{ isCollections ? "Assortments of your favorite classic cookies." : "Exclusive cookies." }}
      </h6>
      <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
        <box-card
          v-for="item in boxes"
          :key="item.name"
          :box="item"
          @click="goToBoxPage(item.name)" />
      </div>
    </template>
    <box
      v-else
      :box="box" />
  </div>
</template>
