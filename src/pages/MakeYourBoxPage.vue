<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useOrderStore } from "@/stores";
import { Cookies } from "@/data";
import { IUserBox } from "@/types";

const orderStore = useOrderStore();
const { addUserBox } = orderStore;

const userBox = ref<IUserBox>({ id: "", cookies: {} });

const isUserBoxFull = computed(
  () => Object.values(userBox.value.cookies).reduce((total, curr) => total + curr, 0) === 8,
);

const getLargerImagePath = (image: string): string => {
  return image.split("?")[0];
};

const addCookie = (id: string): void => {
  const isCookie = Object.keys(userBox.value.cookies).includes(id);
  if (isUserBoxFull.value) return;
  if (isCookie) {
    userBox.value.cookies[id] += 1;
  } else {
    userBox.value.cookies[id] = 1;
  }
};

const onClickMinus = (id: string): void => {
  const isCookie = Object.keys(userBox.value.cookies).includes(id);
  if (!isCookie) return;

  if (userBox.value.cookies[id] === 1) {
    delete userBox.value.cookies[id];
  } else {
    userBox.value.cookies[id] -= 1;
  }
};

const addUserBoxToCart = (): void => {
  addUserBox({ ...userBox.value });
  userBox.value = { id: "", cookies: {} };
  userBox.value.id = uuidv4();
  window.scrollTo(0, 0);
};

watch(
  () => isUserBoxFull.value,
  (val) => {
    if (val) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
);

onMounted(() => (userBox.value.id = uuidv4()));
</script>

<template>
  <div class="content">
    <h2>Make Your Box</h2>
    <h6>Choose 8 cookies to create a box.</h6>
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-start">
      <div
        v-for="item in Cookies"
        :key="item.name"
        class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
        <div
          class="h-48 w-full bg-contain bg-no-repeat bg-center"
          :style="`background-image: url(${item.image})`"></div>
        <div class="p-3">
          <div class="mb-2 text-right">
            <span
              class="text-sm text-orange-500 bg-orange-100 font-medium pl-2.5 pr-1 py-1 rounded-s-full">
              {{ item.bag }} x
            </span>
            <span
              class="text-sm text-violet-600 bg-violet-100 font-medium pr-2.5 pl-2 py-1 rounded-e-full">
              {{ item.cookiesPerBag }} {{ item.cookiesPerBag > 1 ? "cookies" : "cookie" }}
            </span>
          </div>
          <div class="text-lg font-semibold text-gray-900">{{ item.name }}</div>
          <div>{{ item.brand }}</div>
          <div class="text-sm text-gray-500">{{ item.description }}</div>
          <div class="text-gray-400 mt-2 flex flex-row justify-between gap-2 items-center">
            <a
              class="text-sm hover:underline hover:cursor-pointer"
              :href="getLargerImagePath(item.image)"
              target="_blank">
              See image
            </a>
            <div class="flex items-center">
              <template v-if="userBox.cookies[item.id]">
                <button
                  type="button"
                  class="text-white bg-violet-600 font-medium rounded-l-full text-sm p-1.5 text-center inline-flex items-center"
                  @click.stop="onClickMinus(item.id)">
                  <svg
                    class="w-5 h-5"
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
                <div class="py-0.5 px-2 border-2 text-white bg-violet-600 border-violet-600">
                  {{ userBox.cookies[item.id] }}
                </div>
                <button
                  type="button"
                  :disabled="isUserBoxFull"
                  class="text-white bg-violet-600 disabled:bg-violet-300 font-medium rounded-r-full text-sm p-1.5 text-center inline-flex items-center"
                  @click.stop="addCookie(item.id)">
                  <svg
                    class="w-5 h-5"
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
                :disabled="isUserBoxFull"
                class="text-white bg-violet-600 disabled:bg-violet-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center"
                @click.stop="addCookie(item.id)">
                <svg
                  class="w-5 h-5"
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
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-6">
      <button
        type="button"
        :disabled="!isUserBoxFull"
        class="px-6 py-3 text-center inline-flex items-center text-base font-medium text-white disabled:bg-orange-200 bg-orange-500 rounded-md"
        @click="addUserBoxToCart">
        Add to cart
      </button>
    </div>
  </div>
</template>
