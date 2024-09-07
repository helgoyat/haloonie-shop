<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";

const orderStore = useOrderStore();
const { isOrder, boxCount } = storeToRefs(orderStore);
</script>

<template>
  <nav class="bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-screen-lg flex items-center justify-between mx-auto p-4">
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="brand text-purple-600 self-center text-3xl whitespace-nowrap">Haloonie</span>
      </router-link>
      <div class="items-center justify-between flex w-auto">
        <ul>
          <li
            v-for="item in [{ name: 'Our Boxes', to: { name: 'OurBoxesPage' } }]"
            :key="item.name">
            <router-link
              :to="item.to"
              active-class="text-violet-500"
              class="block py-2 px-3 text-gray-900 rounded hover:text-violet-700 md:p-0">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-link
          :to="isOrder ? { name: 'OrderPage' } : { name: 'OurBoxesPage' }"
          class="relative font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center"
          :class="isOrder ? 'text-white bg-amber-400' : 'text-white bg-emerald-400'">
          <svg
            v-if="isOrder"
            class="w-5 h-5 me-1 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
          </svg>
          {{ isOrder ? "Cart" : "Get started" }}
          <div
            v-if="isOrder"
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-violet-500 border-2 border-white rounded-full -top-2 -end-2">
            {{ boxCount }}
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
