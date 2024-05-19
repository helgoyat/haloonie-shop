<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { kebabCase } from "lodash";
import { Boxes } from "@/data";
import { IBox, BoxType } from "@/types";
import BoxCard from "@/components/BoxCard/BoxCard.vue";

const router = useRouter();

const OurBoxes = computed((): IBox[] => Boxes.filter((item) => item.type === BoxType.Regular));

const goToBoxPage = (boxName: string) => {
  router.push({ name: "BoxPage", params: { name: kebabCase(boxName) } });
};
</script>

<template>
  <div class="content">
    <h2>Our Boxes</h2>
    <div class="grid grid-cols-3 gap-6 justify-items-center">
      <box-card
        v-for="item in OurBoxes"
        :key="item.name"
        :box="item"
        @click="goToBoxPage(item.name)" />
    </div>
  </div>
</template>
