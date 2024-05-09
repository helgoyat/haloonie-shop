<script setup lang="ts">
import { useRouter } from "vue-router";
import BoxCard from "@/components/Elements/BoxCard.vue";

const router = useRouter();

const goToBoxPage = () => {
  router.push({ name: "BoxPage", params: { name: "pirouette-etoile" } });
};
</script>

<template>
  <div class="content">
    <h2>Our Boxes</h2>
    <div class="grid grid-cols-3 gap-6 justify-items-center">
      <box-card
        v-for="item in [1, 2, 3, 4]"
        :key="item"
        @click="goToBoxPage" />
    </div>
  </div>
</template>
