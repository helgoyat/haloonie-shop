<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { BoxTypeParamEnum } from "@/types";

const orderStore = useOrderStore();
const { isOrder, boxCount } = storeToRefs(orderStore);
</script>

<template>
  <nav class="bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200">
    <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="brand text-purple-700 self-center text-3xl whitespace-nowrap">Haloonie</span>
      </router-link>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <router-link
          :to="
            isOrder
              ? { name: 'OrderPage' }
              : { name: 'BoxesPage', params: { boxType: BoxTypeParamEnum.Regular } }
          "
          class="relative font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center"
          :class="isOrder ? 'text-emerald-600 bg-emerald-100' : 'text-white bg-emerald-400'">
          <svg
            v-if="isOrder"
            class="w-5 h-5 me-1 text-emerald-600"
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
            class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-emerald-500 border-2 border-white rounded-full -top-2 -end-2">
            {{ boxCount }}
          </div>
        </router-link>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li
            v-for="item in [
              { name: 'Our Boxes', boxType: BoxTypeParamEnum.Regular },
              { name: 'Collections', boxType: BoxTypeParamEnum.Collection },
              { name: 'Specials', boxType: BoxTypeParamEnum.Special },
            ]"
            :key="item.name">
            <router-link
              :to="{ name: 'BoxesPage', params: { boxType: item.boxType } }"
              active-class="text-violet-500"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-violet-300 md:hover:bg-transparent hover:text-violet-700 md:p-0">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
