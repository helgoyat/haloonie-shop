<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRootStore, useOrderStore } from "@/stores";
import { ICookie } from "@/types";
import { Cookies } from "@/data";
import Message from "@/components/Elements/Message.vue";
import HrTitle from "@/components/Elements/HrTitle.vue";

const rootStore = useRootStore();
const { box } = storeToRefs(rootStore);

const orderStore = useOrderStore();
const { boxIds } = storeToRefs(orderStore);
const { addBox, deleteBox, removeBox } = orderStore;

const cookies = computed((): ICookie[] => {
  if (!box.value) return [];
  return Object.keys(box.value.cookies)
    .map((id) => Cookies.find((item) => item.id === id) || null)
    .filter((e) => !!e) as ICookie[];
});

const onClickMinus = (id: string): void => {
  if (!box.value) return;
  if (boxIds.value[box.value.id] === 1) {
    deleteBox(id);
  } else {
    removeBox(id);
  }
};
</script>

<template>
  <div class="content">
    <template v-if="box">
      <h2>{{ box.name }}</h2>
      <hr-title title="Cookies" />
      <div class="grid grid-cols-4 gap-6 justify-items-center items-start">
        <div
          v-for="item in cookies"
          :key="item.name"
          class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
          <div
            class="h-48 w-full bg-contain bg-no-repeat bg-center"
            :style="`background-image: url(${item.image})`"></div>
          <div class="p-3">
            <div class="text-lg font-semibold tracking-tight text-gray-900">{{ item.name }}</div>
            <div>{{ item.brand }}</div>
            <div class="text-gray-500 mt-2 flex flex-row justify-between gap-2">
              <div class="text-sm hover:underline hover:cursor-pointer">See details</div>
              <div class="text-sm">
                <span class="text-gray-600 bg-gray-100 text-xs font-medium px-2.5 py-1 rounded">
                  {{ box.cookies[item.id] }} unit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-6">
        <template v-if="boxIds[box.id]">
          <button
            type="button"
            class="text-white bg-orange-500 font-medium rounded-l-full text-sm p-2.5 text-center inline-flex items-center"
            @click.stop="onClickMinus(box.id)">
            <svg
              class="w-7 h-7"
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
            class="py-1.5 w-14 border-2 border-orange-500 bg-orange-500 text-white flex items-center justify-center">
            {{ boxIds[box.id] }}
          </div>
          <button
            type="button"
            class="text-white bg-orange-500 font-medium rounded-r-full text-sm p-2.5 text-center inline-flex items-center"
            @click.stop="addBox(box.id)">
            <svg
              class="w-7 h-7"
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
        </template>
        <button
          v-else
          type="button"
          class="w-52 px-5 py-3 text-base font-medium text-center text-white bg-orange-500 rounded-full"
          @click="addBox(box.id)">
          Add to cart
        </button>
      </div>
      <!-- <hr-title title="Details" /> -->
      <!-- <div>
        <ul class="w-full text-sm space-y-6 text-gray-900 list-none list-inside">
          <li>
            <span class="font-semibold text-gray-900">How it works</span>
            <div class="text-gray-500 mt-2">
              We engage ourselves to deliver in best delays.
            </div>
          </li>
          <li>
            <span class="font-semibold text-gray-900">Background</span>
            <div class="text-gray-500 mt-2">
              Story of our lives.
            </div>
          </li>
        </ul>
      </div> -->
    </template>
    <template v-else>
      <message text="Invalid box" />
    </template>
  </div>
</template>
