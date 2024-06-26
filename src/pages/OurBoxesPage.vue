<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { kebabCase } from "lodash";
import { useRootStore } from "@/stores";
import { Boxes } from "@/data";
import BoxCard from "@/components/Elements/BoxCard.vue";
import Box from "@/components/Elements/Box.vue";

const router = useRouter();

const rootStore = useRootStore();
const { box } = storeToRefs(rootStore);

const goToBoxPage = (boxName: string) => {
  router.push({
    name: "OurBoxesPage",
    params: { boxName: kebabCase(boxName) },
  });
};
</script>

<template>
  <div class="content">
    <template v-if="!box">
      <h2>Our Boxes</h2>
      <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
        <box-card
          v-for="item in Boxes"
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
