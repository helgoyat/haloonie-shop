<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="content">
    <h2>Box {{ route.params.name }}</h2>
  </div>
</template>
