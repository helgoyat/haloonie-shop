<script setup lang="ts">
import Featured from "@/components/Elements/Featured.vue";
import HrTitle from "@/components/Elements/HrTitle.vue";
</script>

<template>
  <div class="header-container">
    <h1 class="my-4 leading-[60px]">Shop French Treats</h1>
    <h1>🇫🇷</h1>
  </div>
  <div class="content !pt-2">
    <hr-title title="Bonjour" />
    <div class="text-gray-800 text-xl text-center">
      Welcome to Haloonie, your destination for French treats, carefully boxed and shipped to the
      USA.
    </div>
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      <div class="w-full p-6 bg-white border border-gray-200 rounded-lg">
        <svg
          class="w-8 h-8 text-violet-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
        </svg>
        <h5 class="my-2 text-2xl font-semibold text-gray-900">Our Mission</h5>
        <p class="font-normal text-gray-500">
          Spreading French delight across the Atlantic, one delicious bite at a time.
        </p>
      </div>
      <div class="w-full p-6 bg-white border border-gray-200 rounded-lg">
        <svg
          class="w-8 h-8 text-violet-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
        </svg>
        <h5 class="my-2 text-2xl font-semibold text-gray-900">Enjoy</h5>
        <p class="font-normal text-gray-500">
          Whether for self-love or gift-giving, our boxes are the perfect choice.
        </p>
      </div>
      <div class="w-full p-6 bg-white border border-gray-200 rounded-lg">
        <svg
          class="w-8 h-8 text-violet-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        </svg>
        <h5 class="my-2 text-2xl font-semibold text-gray-900">Shipping</h5>
        <p class="font-normal text-gray-500">
          Shipped directly from France to your chosen FedEx pickup location in the USA.
        </p>
      </div>
    </div>
    <hr-title title="Featured" />
    <featured />
    <div class="flex flex-col items-center my-2">
      <router-link :to="{ name: 'OurBoxesPage' }">
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
