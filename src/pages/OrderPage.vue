<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import OrderTable from "@/components/OrderSteps/OrderTable.vue";
import OrderForm from "@/components/OrderSteps/OrderForm.vue";

const orderStore = useOrderStore();
const { isOrder } = storeToRefs(orderStore);

const step = ref<number>(0);

const nextStepLabel = computed((): string => {
  return "Shipping";
});
</script>

<template>
  <div class="content">
    <h2>Order</h2>
    <template v-if="isOrder">
      <div class="flex flex-col items-center">
        <order-table v-if="step === 0" />
        <order-form v-if="step === 1" />
      </div>
      <div class="flex justify-center my-2">
        <button
          type="button"
          class="px-5 py-3 text-center inline-flex items-center text-base font-medium text-white bg-violet-600 rounded-lg"
          @click="() => ++step">
          {{ nextStepLabel }}
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
      <div class="flex flex-col items-center gap-4 my-6">
        <svg
          class="w-36 h-36 text-gray-400"
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
        <div class="text-gray-400 text-base">There is no box yet</div>
      </div>
    </template>
  </div>
</template>
