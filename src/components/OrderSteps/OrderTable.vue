<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { SpecialBoxes } from "@/data";

const orderStore = useOrderStore();
const { boxIds, boxes, isMaxBoxCount } = storeToRefs(orderStore);
const { addBox, removeBox, deleteBox } = orderStore;

const isSpecialBox = (id: string): boolean => {
  return !!SpecialBoxes.find((item) => item.id === id);
};
</script>

<template>
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
          <td class="px-6 py-4 font-semibold text-gray-900">${{ item.price * boxIds[item.id] }}</td>
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
</template>
