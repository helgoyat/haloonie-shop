<script setup lang="ts">
import { ref, computed } from "vue";
import type { Component } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import OrderSummary from "@/components/OrderSteps/OrderSummary.vue";
import OrderForm from "@/components/OrderSteps/OrderForm.vue";

const orderStore = useOrderStore();
const { isOrder } = storeToRefs(orderStore);

const components: Record<number, Component> = {
  0: OrderSummary,
  1: OrderForm,
};

const stepTitles: Record<number, string> = {
  1: "Information",
};

const nextStepButtonLabels: Record<string, string> = {
  0: "Continue",
  1: "Checkout",
};

const step = ref<number>(0);

const pageTitle = computed((): string => stepTitles[step.value]);

const nextStepButtonLabel = computed((): string => {
  return nextStepButtonLabels[step.value];
});

const goToNextStep = (): void => {
  window.scrollTo(0, 0);
  ++step.value;
};

const getComponent = (val: number): Component => {
  return components[val];
};
</script>

<template>
  <div class="content">
    <h2 v-if="step !== 0">{{ pageTitle }}</h2>
    <template v-if="isOrder">
      <div class="flex flex-col items-center">
        <component :is="getComponent(step)" />
      </div>
      <div class="flex justify-center my-4">
        <button
          type="button"
          class="px-6 py-3 text-center inline-flex items-center text-base font-medium text-white bg-violet-600 rounded-md"
          @click="goToNextStep">
          {{ nextStepButtonLabel }}
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-col items-center gap-6 my-6">
        <svg
          class="w-36 h-36 text-violet-500"
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
            d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
        </svg>
        <router-link :to="{ name: 'MakeYourBoxPage' }">
          <button
            type="button"
            class="px-6 py-3 text-center text-base font-medium text-violet-600 border-2 border-violet-300 rounded-md">
            Get Started
          </button>
        </router-link>
      </div>
    </template>
  </div>
</template>
