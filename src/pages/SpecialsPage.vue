<script setup lang="ts">
import SpecialBoxCard from "@/components/Elements/SpecialBoxCard.vue";
</script>

<template>
  <div class="content">
    <h2>Specials</h2>
    <div class="text-gray-500">
      Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools.
    </div>
    <div class="grid grid-cols-3 gap-6 justify-items-center">
      <special-box-card
        v-for="item in [1, 2, 3]"
        :key="item" />
    </div>
  </div>
</template>
