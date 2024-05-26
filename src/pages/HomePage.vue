<script setup lang="ts">
import Featured from "@/components/Elements/Featured.vue";
import HrTitle from "@/components/Elements/HrTitle.vue";
import { BoxTypeEnum } from "@/types";
</script>

<template>
  <div class="header-container">
    <h1>Shop French Cookies</h1>
    <router-link :to="{ name: 'MakeYourBoxPage' }">
      <button
        type="button"
        class="px-6 py-3 text-lg text-white ring-2 ring-offset-4 ring-violet-400 bg-violet-600 font-medium rounded-full text-center">
        Get started
      </button>
    </router-link>
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
    <div class="flex flex-col items-center my-2">
      <router-link :to="{ name: 'HowItWorksPage' }">
        <button
          type="button"
          class="px-6 py-3 text-center text-base font-medium text-violet-600 border-2 border-violet-100 rounded-md">
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
          class="px-6 py-3 text-center text-base font-medium text-violet-600 border-2 border-violet-100 rounded-md">
          Discover
        </button>
      </router-link>
    </div>
  </div>
</template>

<style>
.header-container {
  @apply w-full h-[400px] flex flex-col gap-12 justify-center items-center bg-[url('../pictures/theme.jpg')] bg-cover bg-bottom p-4;
}
</style>
