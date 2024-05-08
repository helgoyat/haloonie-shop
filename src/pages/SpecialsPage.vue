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
    <div class="grid grid-cols-3 gap-4">
      <special-box-card />
      <special-box-card />
    </div>
  </div>
</template>
