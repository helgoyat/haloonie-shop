<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { kebabCase } from "lodash";
import { Boxes } from "@/data";
import { IBox, BoxType } from "@/types";
import BoxCard from "@/components/BoxCard/BoxCard.vue";

const router = useRouter();

const SpecialBoxes = computed((): IBox[] => Boxes.filter((item) => item.type === BoxType.Special));

const goToBoxPage = (boxName: string) => {
  router.push({ name: "BoxPage", params: { name: kebabCase(boxName) } });
};
</script>

<template>
  <div class="content">
    <h2>Specials</h2>
    <div class="text-gray-500">
      Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools.
    </div>
    <div class="grid grid-cols-3 gap-6 justify-items-center">
      <box-card
        v-for="item in SpecialBoxes"
        :key="item.name"
        :box="item"
        @click="goToBoxPage(item.name)" />
    </div>
  </div>
</template>
