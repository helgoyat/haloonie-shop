<script setup lang="ts">
import MainBar from "@/components/Layout/MainBar.vue";
import FooterBar from "@/components/Layout/FooterBar.vue";
</script>

<template>
  <main-bar />
  <router-view></router-view>
  <footer-bar />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Days+One&family=Kumbh+Sans:wght@100..900&family=Pacifico&display=swap");
</style>
