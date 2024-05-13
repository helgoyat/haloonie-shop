<script setup lang="ts">
import { useRouter } from "vue-router";
import { kebabCase } from "lodash";
import { CollectionBoxes } from "@/data";
import CollectionBoxCard from "@/components/BoxCard/CollectionBoxCard.vue";

const router = useRouter();

const goToBoxPage = (boxName: string) => {
  router.push({ name: "BoxPage", params: { name: kebabCase(boxName) } });
};
</script>

<template>
  <div class="content">
    <h2>Collections</h2>
    <div class="text-gray-500">
      Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools.
    </div>
    <div class="grid grid-cols-3 gap-6 justify-items-center">
      <collection-box-card
        v-for="item in CollectionBoxes"
        :key="item.name"
        :box="item"
        @click="goToBoxPage(item.name)" />
    </div>
  </div>
</template>
