<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { Boxes, Cookies, DefaultBoxImage } from "@/data";
import { BoxTypeEnum } from "@/types";

const orderStore = useOrderStore();
const { boxIds, boxes, userBoxes, boxCount, isMaxBoxCount } = storeToRefs(orderStore);
const { addBox, removeBox, deleteBox } = orderStore;

const cartBoxes = computed((): Array<any> => {
  return [
    ...boxes.value.map((item) => ({
      ...item,
      cost: item.price * boxIds.value[item.id],
      quantity: boxIds.value[item.id],
      isMakeYourBox: false,
    })),
    ...userBoxes.value.map((item) => ({
      ...item,
      name: "Make Your Box",
      image: DefaultBoxImage,
      cost: 36,
      quantity: 1,
      isMakeYourBox: true,
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

const isSpecialBox = (id: string): boolean => {
  return !!Boxes.find((item) => item.id === id && item.type === BoxTypeEnum.Special);
};

const isCollectionBox = (id: string): boolean => {
  return !!Boxes.find((item) => item.id === id && item.type === BoxTypeEnum.Collection);
};

const getMakeYourBoxCookieList = (cookies: Record<string, number>): Array<string> => {
  return Object.keys(cookies)
    .map((id) => {
      const cookie = Cookies.find((e) => e.id === id);
      if (!cookie) return null;
      return (
        `${cookie.name} ${cookie.brand}. ${cookie.description} (${cookie.bag} x ${cookie.cookiesPerBag} cookies). Quantity: ${cookies[id]}` ||
        ""
      );
    })
    .filter((item) => !!item) as Array<string>;
};
</script>

<template>
  <div class="w-full flex gap-4 md:flex-row flex-col">
    <div class="border border-gray-100 rounded-md overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right">
        <thead class="text-sm text-gray-800 uppercase bg-gray-100">
          <tr>
            <th
              scope="col"
              class="px-5 py-3 min-w-72">
              Box
            </th>
            <th
              scope="col"
              class="px-5 py-3 w-14">
              Quantity
            </th>
            <th
              scope="col"
              class="px-5 py-3 text-right w-40">
              Price
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in cartBoxes">
            <tr
              class="bg-white border-gray-200"
              :class="index < cartBoxes.length - 1 && !item.isMakeYourBox && 'border-b'">
              <td class="px-5 py-4 h-full font-semibold text-gray-900 text-base">
                <div class="flex items-center justify-stretch">
                  <div>{{ item.name }}</div>
                  <span
                    v-if="isSpecialBox(item.id)"
                    class="bg-amber-500 text-white border border-amber-500 text-xs font-medium ms-3 px-2 py-1 rounded">
                    Special
                  </span>
                  <span
                    v-if="isCollectionBox(item.id)"
                    class="text-amber-500 bg-white border border-amber-500 text-xs font-medium ms-3 px-2 py-1 rounded">
                    Collection
                  </span>
                </div>
              </td>
              <td class="px-5 py-4">
                <div
                  v-if="!item.isMakeYourBox"
                  class="flex items-center">
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
                    {{ item.quantity }}
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
                <div
                  v-else
                  class="flex items-center justify-center">
                  <div class="py-1.5 px-4 text-gray-700">
                    {{ item.quantity }}
                  </div>
                </div>
              </td>
              <td class="px-5 py-4 font-semibold text-gray-900 text-right">${{ item.cost }}.00</td>
              <td class="px-4 py-4">
                <div
                  class="h-24 w-24 bg-contain bg-no-repeat bg-center"
                  :style="`background-image: url(${item.image})`" />
              </td>
              <td class="px-5 py-4">
                <button
                  type="button"
                  class="text-gray-400 hover:text-gray-600 rounded-full inline-flex items-center"
                  @click="deleteBox(item.id, item.isMakeYourBox)">
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
            <tr
              v-if="item.isMakeYourBox"
              :class="index < cartBoxes.length - 1 && item.isMakeYourBox && 'border-b'">
              <td
                class="px-5 pb-4"
                colspan="5">
                <div
                  v-if="item.isMakeYourBox"
                  class="text-sm text-gray-500 font-normal">
                  <ul class="space-y-1 list-disc list-inside">
                    <li v-for="el in getMakeYourBoxCookieList(item.cookies)">
                      <div
                        class="inline"
                        v-html="el"></div>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="flex-1 min-w-56 border border-violet-200 rounded-md overflow-hidden">
      <table class="w-full text-base text-left rtl:text-right text-violet-600">
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
            <td class="px-5 py-4 flex flex-col gap-2 text-base">
              <div class="flex flex-row justify-between">
                <div class="font-bold">Box count</div>
                <div>{{ boxCount }}</div>
              </div>
              <div class="flex flex-row justify-between">
                <div class="font-bold">Total</div>
                <div>$124.00 (USD)</div>
              </div>
              <div class="text-gray-400 italic text-sm">Shipping and taxes included.</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
