<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { SpecialBoxes } from "@/data";

const orderStore = useOrderStore();
const { boxIds, isOrder, boxes, isMaxBoxCount } = storeToRefs(orderStore);
const { addBox, removeBox, deleteBox } = orderStore;

const isSpecialBox = (id: string): boolean => {
  return !!SpecialBoxes.find((item) => item.id === id);
};
</script>

<template>
  <div class="content">
    <h2>Order</h2>
    <template v-if="isOrder">
      <div class="flex flex-col items-center">
        <div class="max-w-4xl w-full border-2 border-gray-50 rounded-lg overflow-hidden">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-600 uppercase bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-16 py-3">
                  <span class="sr-only">Image</span>
                </th>
                <th
                  scope="col"
                  class="px-6 py-3">
                  Box
                </th>
                <th
                  scope="col"
                  class="px-6 py-3">
                  Quantity
                </th>
                <th
                  scope="col"
                  class="px-6 py-3">
                  Price
                </th>
                <th
                  scope="col"
                  class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in boxes"
                class="bg-white border-violet-100"
                :class="index < boxes.length - 1 && 'border-b'">
                <td class="py-4 px-8">
                  <div
                    class="h-24 w-full bg-contain bg-no-repeat bg-center bg-[url(https://flowbite.com/docs/images/products/apple-watch.png)]" />
                </td>
                <td class="px-6 py-4 h-full font-semibold text-gray-900 text-base">
                  <div class="flex items-center justify-stretch">
                    {{ item.name }}
                    <span
                      v-if="isSpecialBox(item.id)"
                      class="bg-orange-500 text-white text-xs font-medium ms-2 px-2 py-1 rounded">
                      Special
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <button
                      class="inline-flex items-center justify-center h-6 w-6 p-1 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 disabled:text-gray-200 disabled:border-gray-200 disabled:bg-white"
                      type="button"
                      :disabled="boxIds[item.id] < 2"
                      @click="removeBox(item.id)">
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16" />
                      </svg>
                    </button>
                    <div class="font-semibold text-gray-900">
                      {{ boxIds[item.id] }}
                    </div>
                    <button
                      class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-400 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-100 disabled:text-gray-200 disabled:border-gray-200 disabled:bg-white"
                      type="button"
                      :disabled="isMaxBoxCount"
                      @click="addBox(item.id)">
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18">
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900">
                  ${{ item.price * boxIds[item.id] }}
                </td>
                <td class="px-6 py-4">
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex justify-center my-4">
        <button
          type="button"
          class="px-5 py-3 text-center inline-flex items-center text-base font-medium text-white bg-violet-600 rounded-lg">
          Checkout
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
