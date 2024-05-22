<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { kebabCase, startCase, camelCase } from "lodash";
import { Boxes } from "@/data";
import { IBox, BoxTypeEnum, BoxTypeParamEnum } from "@/types";
import BoxCard from "@/components/BoxCard/BoxCard.vue";

const router = useRouter();
const route = useRoute();

const boxes = computed((): IBox[] => {
  const index = Object.values(BoxTypeParamEnum).indexOf(route.params.boxType as BoxTypeParamEnum);
  return Boxes.filter(
    (item) => item.type === BoxTypeEnum[BoxTypeEnum[index] as keyof typeof BoxTypeEnum],
  );
});

const goToBoxPage = (boxName: string) => {
  router.push({ name: "BoxPage", params: { name: kebabCase(boxName) } });
};
</script>

<template>
  <div class="content">
    <h2>{{ startCase(camelCase((route.params.boxType as string).replace("-", " "))) }}</h2>
    <div
      v-if="route.params.boxType !== BoxTypeParamEnum.MakeYourBox"
      class="grid grid-cols-3 gap-6 justify-items-center">
      <box-card
        v-for="item in boxes"
        :key="item.name"
        :box="item"
        @click="goToBoxPage(item.name)" />
    </div>
    <div v-else>Make it happen !</div>
  </div>
</template>
