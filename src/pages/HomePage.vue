<script setup lang="ts">
import Featured from "@/components/Elements/Featured.vue";
import HrTitle from "@/components/Elements/HrTitle.vue";
import { BoxTypeEnum } from "@/types";
</script>

<template>
  <div class="header-container">
    <h1>Shop French Cookies</h1>
    <img
      class="w-[160px]"
      src="https://cdn.pixabay.com/photo/2021/01/09/01/54/donut-5901143_1280.png" />
  </div>
  <div class="content !pt-2">
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
    <div class="flex flex-col items-center my-2">
      <router-link :to="{ name: 'HowItWorksPage' }">
        <button
          type="button"
          class="px-6 py-3 text-center text-base font-medium text-violet-600 border-2 border-violet-300 rounded-md">
          Learn more
        </button>
      </router-link>
    </div>
    <hr-title title="Featured" />
    <featured />
    <div class="flex flex-col items-center my-2">
      <router-link :to="{ name: 'BoxesPage', params: { boxType: BoxTypeEnum.Collection } }">
        <button
          type="button"
          class="px-6 py-3 text-center text-base font-medium text-violet-600 border-2 border-violet-300 rounded-md">
          Discover
        </button>
      </router-link>
    </div>
  </div>
</template>

<style>
.header-container {
  @apply w-full flex flex-col gap-6 justify-center items-center p-4 pt-10;
}
</style>
