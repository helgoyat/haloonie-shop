<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { kebabCase, startCase, camelCase } from "lodash";
import { useRootStore } from "@/stores";
import { Boxes } from "@/data";
import { IBox, BoxTypeEnum, BoxTypeParamEnum } from "@/types";
import BoxCard from "@/components/Elements/BoxCard.vue";
import Box from "@/components/Elements/Box.vue";

const router = useRouter();
const route = useRoute();

const rootStore = useRootStore();
const { box } = storeToRefs(rootStore);

const boxes = computed((): IBox[] => {
  const index = Object.values(BoxTypeParamEnum).indexOf(route.params.boxType as BoxTypeParamEnum);
  return Boxes.filter(
    (item) => item.type === BoxTypeEnum[BoxTypeEnum[index] as keyof typeof BoxTypeEnum],
  );
});

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
      <div class="grid grid-cols-3 gap-6 justify-items-center">
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
