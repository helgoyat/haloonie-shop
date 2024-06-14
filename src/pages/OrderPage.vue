<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores";
import { Boxes, Treats, DefaultBoxImage } from "@/data";
import { BoxTypeEnum } from "@/types";
import { getTreatTypeLabel } from "@/utils";
import ShippingForm from "@/components/Elements/ShippingForm.vue";

const orderStore = useOrderStore();
const { isOrder, boxIds, boxes, userBoxes, boxCount, isMaxBoxCount } = storeToRefs(orderStore);
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

const getMakeYourBoxTreatList = (treats: Record<string, number>): Array<string> => {
  return Object.keys(treats)
    .map((id) => {
      const treat = Treats.find((e) => e.id === id);
      if (!treat) return null;
      return (
        `${treat.name} ${treat.brand}. ${treat.description} (${treat.bag} x ${
          treat.treatsPerBag
        } ${getTreatTypeLabel(treat)}). Quantity: ${treats[id]}` || ""
      );
    })
    .filter((item) => !!item) as Array<string>;
};
</script>

<template>
  <div class="content">
    <template v-if="isOrder">
      <div class="border border-gray-600 rounded-md overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right">
          <thead class="text-white uppercase bg-gray-600">
            <tr>
              <th
                scope="col"
                class="px-5 py-3 min-w-72">
                Box
              </th>
              <th
                scope="col"
                class="px-5 py-3 text-center w-14">
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
                      class="bg-emerald-500 text-white border-2 border-emerald-500 text-xs font-medium ms-3 px-2 py-1 rounded">
                      Special
                    </span>
                    <span
                      v-if="isCollectionBox(item.id)"
                      class="text-emerald-500 bg-white border-2 border-emerald-500 text-xs font-medium ms-3 px-2 py-1 rounded">
                      Collection
                    </span>
                  </div>
                </td>
                <td class="px-5 py-4 text-center">
                  <div
                    v-if="!item.isMakeYourBox"
                    class="flex items-center">
                    <button
                      type="button"
                      class="text-violet-700 font-medium rounded-full text-sm p-1 text-center inline-flex items-center border-2 border-violet-300 disabled:text-gray-200 disabled:border-gray-100"
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
                      class="text-violet-700 font-medium rounded-full text-sm p-1 text-center inline-flex items-center border-2 border-violet-300 disabled:text-gray-200 disabled:border-gray-100"
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
                    <div
                      class="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-violet-700">
                      {{ item.quantity }}
                    </div>
                  </div>
                </td>
                <td class="px-5 py-4 font-semibold text-gray-900 text-right">
                  ${{ item.cost }}.00
                </td>
                <td class="px-4 py-4 flex justify-center">
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
                      <li v-for="el in getMakeYourBoxTreatList(item.treats)">
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
      <div class="w-full flex gap-4 md:flex-row flex-col">
        <div class="border border-violet-200 rounded-md p-8">
          <shipping-form />
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
                <td class="px-5 py-4 flex flex-col gap-3 text-base">
                  <div class="flex flex-row justify-between text-gray-700">
                    <div>Box count</div>
                    <div>{{ boxCount }}</div>
                  </div>
                  <div class="flex flex-row justify-between">
                    <div>Subtotal</div>
                    <div>$117.00</div>
                  </div>
                  <div class="flex flex-row justify-between">
                    <div>Tax</div>
                    <div>$7.00</div>
                  </div>
                  <div class="flex flex-row justify-between text-red-600 font-bold">
                    <div>Total</div>
                    <div>$124.00</div>
                  </div>
                  <div class="text-gray-400 italic text-sm">Includes shipping and import tax.</div>
                </td>
              </tr>
            </tbody>
          </table>
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
