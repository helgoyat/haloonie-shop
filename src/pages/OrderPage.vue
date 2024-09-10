<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import ShippingForm from "@/components/Elements/ShippingForm.vue";
import SectionTitle from "@/components/Elements/SectionTitle.vue";

const orderStore = useOrderStore();
const { isOrder, boxIds, boxes, boxCount, isMaxBoxCount } = storeToRefs(orderStore);
const { addBox, removeBox, deleteBox } = orderStore;

const cartBoxes = computed((): Array<any> => {
  return [
    ...boxes.value.map((item) => ({
      ...item,
      cost: item.price * boxIds.value[item.id],
      quantity: boxIds.value[item.id],
    })),
  ].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
});
</script>

<template>
  <div class="content">
    <section-title title="Your Boxes" />
    <template v-if="isOrder">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 items-start">
        <div
          v-for="item in cartBoxes"
          :key="item.id"
          class="p-4 border rounded-md border-gray-300">
          <div class="flex flex-row justify-between items-center gap-2">
            <div class="overflow-hidden text-nowrap text-ellipsis">{{ item.name }}</div>
            <div>
              <button
                type="button"
                class="text-gray-400 hover:text-gray-600 rounded-full inline-flex items-center"
                @click="deleteBox(item.id)">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-4 py-4 flex justify-center">
            <div
              class="h-24 w-24 bg-contain bg-no-repeat bg-center"
              :style="`background-image: url(${item.image})`" />
          </div>
          <div class="flex flex-row justify-between items-center">
            <div class="flex items-center">
              <button
                type="button"
                class="text-violet-700 font-medium rounded-full text-sm p-1 text-center inline-flex items-center border border-violet-600 disabled:text-gray-200 disabled:border-gray-100"
                :disabled="boxIds[item.id] < 2"
                @click="removeBox(item.id)">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14" />
                </svg>
              </button>
              <div
                class="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-violet-700">
                {{ item.quantity }}
              </div>
              <button
                type="button"
                class="text-violet-700 font-medium rounded-full text-sm p-1 text-center inline-flex items-center border border-violet-600 disabled:text-gray-200 disabled:border-gray-100"
                :disabled="isMaxBoxCount"
                @click="addBox(item.id)">
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5" />
                </svg>
              </button>
            </div>
            <div class="font-semibold text-gray-900">${{ item.cost }}.00</div>
          </div>
        </div>
      </div>
      <div class="w-full flex gap-8 md:flex-row flex-col">
        <div class="flex-1 min-w-64 border border-violet-200 rounded-md overflow-hidden">
          <table class="w-full text-base text-left rtl:text-right">
            <thead class="text-sm text-white uppercase bg-violet-600">
              <tr>
                <th
                  scope="col"
                  class="px-5 py-3">
                  Order Summary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-5 py-4 flex flex-col gap-3 text-base">
                  <div class="flex flex-row justify-between">
                    <div>Box count</div>
                    <div>{{ boxCount }}</div>
                  </div>
                  <div class="flex flex-row justify-between text-red-600 font-bold">
                    <div>Total</div>
                    <div>$124.00</div>
                  </div>
                  <hr class="my-4" />
                  <div>Includes:</div>
                  <div class="inline-flex items-center gap-1 text-emerald-600">
                    <svg
                      class="w-5 h-5"
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
                        d="M5 11.917 9.724 16.5 19 7.5" />
                    </svg>
                    Shipping within U.S.
                  </div>
                  <div class="inline-flex items-center gap-1 text-gray-400">
                    <svg
                      class="w-5 h-5"
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
                        d="M5 12h14m-7 7V5" />
                    </svg>
                    Sales tax
                  </div>
                  <div class="text-gray-400 text-sm">
                    Sales tax will be calculated at check-out.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="border border-violet-200 rounded-md p-8">
          <shipping-form />
        </div>
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
        <router-link :to="{ name: 'OurBoxesPage' }">
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
