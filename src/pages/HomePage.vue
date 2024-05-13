<script setup lang="ts">
import Featured from "@/components/Elements/Featured.vue";
</script>

<template>
  <div class="header-container">
    <h1>Shop French Cookies</h1>
    <button
      type="button"
      class="px-6 py-3 text-lg text-white ring-2 ring-offset-4 ring-violet-400 bg-violet-600 font-medium rounded-full text-center">
      Get started
    </button>
  </div>
  <div class="content">
    <h3>Welcome to you!</h3>
    <div class="text-gray-500">
      Track work across the enterprise through an open, collaborative platform. Link issues across
      Jira and ingest data from other software development tools, so your IT support and operations
      teams have richer contextual information to rapidly respond to requests, incidents, and
      changes.
    </div>
    <div class="text-gray-500">
      Deliver great service experiences fast - without the complexity of traditional ITSM
      solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
      with a complete audit trail for every change.
    </div>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-80 h-px my-8 bg-violet-300 border-0" />
      <span class="absolute px-3 brand text-2xl text-violet-600 -translate-x-1/2 bg-white left-1/2">
        Featured Boxes
      </span>
    </div>
    <featured />
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-80 h-px my-8 bg-violet-300 border-0" />
      <span class="absolute px-3 brand text-2xl text-violet-600 -translate-x-1/2 bg-white left-1/2">
        Soon
      </span>
    </div>
    <featured />
  </div>
</template>

<style>
.header-container {
  @apply w-full h-[400px] flex flex-col gap-12 justify-center items-center bg-[url('../pictures/theme.jpg')] bg-cover bg-bottom p-4;
}
</style>
