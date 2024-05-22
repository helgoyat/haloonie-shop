<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { Boxes } from "@/data";
import { BoxTypeEnum } from "@/types";

const orderStore = useOrderStore();
const { boxIds, boxes, isMaxBoxCount } = storeToRefs(orderStore);
const { addBox, removeBox, deleteBox } = orderStore;

const isSpecialBox = (id: string): boolean => {
  return !!Boxes.find((item) => item.id === id && item.type === BoxTypeEnum.Special);
};

const isCollectionBox = (id: string): boolean => {
  return !!Boxes.find((item) => item.id === id && item.type === BoxTypeEnum.Collection);
};
</script>

<template>
  <div class="max-w-4xl w-full border border-violet-100 rounded-lg overflow-hidden">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-sm text-violet-700 uppercase bg-violet-50">
        <tr>
          <th
            scope="col"
            class="px-16 py-3">
            <span class="sr-only">Image</span>
          </th>
          <th
            scope="col"
            class="px-6 py-3 w-72">
            Box
          </th>
          <th
            scope="col"
            class="px-6 py-3 w-48">
            Quantity
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-right w-40">
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
          <td class="px-8 py-4">
            <div
              class="h-24 w-24 bg-contain bg-no-repeat bg-center"
              :style="`background-image: url(${item.image})`" />
          </td>
          <td class="px-6 py-4 h-full font-semibold text-gray-900 text-base">
            <div class="flex items-center justify-stretch">
              {{ item.name }}
              <span
                v-if="isSpecialBox(item.id)"
                class="bg-orange-500 text-white text-xs font-medium ms-3 px-2 py-1 rounded">
                Special
              </span>
              <span
                v-if="isCollectionBox(item.id)"
                class="text-orange-500 bg-white border border-orange-500 text-xs font-medium ms-3 px-2 py-1 rounded">
                Collection
              </span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center">
              <button
                type="button"
                class="text-gray-700 bg-gray-100 font-medium rounded-l-full text-sm p-2.5 text-center inline-flex items-center hover:bg-gray-200 disabled:bg-gray-50"
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
              <div class="py-1.5 px-2 border-2 border-gray-100 bg-gray-100 text-gray-700">
                {{ boxIds[item.id] }}
              </div>
              <button
                type="button"
                class="text-gray-700 bg-gray-100 font-medium rounded-r-full text-sm p-2.5 text-center inline-flex items-center hover:bg-gray-200 disabled:bg-gray-50"
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
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 text-right">
            ${{ item.price * boxIds[item.id] }}.00
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
</template>
