<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useOrderStore } from "@/stores";
import { Treats } from "@/data";
import { ITreat, IUserBox, TreatTypeEnum } from "@/types";
import { getTreatTypeLabel } from "@/utils";

const orderStore = useOrderStore();
const { isMaxBoxCount } = storeToRefs(orderStore);
const { addUserBox } = orderStore;

const treatType = ref<TreatTypeEnum | null>(null);
const userBox = ref<IUserBox>({ id: "", treats: {} });

const treatList = computed(() => {
  if (!treatType.value) return [...Treats];
  return [...Treats].filter((item) => item.type === treatType.value);
});

const isUserBoxFull = computed(
  () => Object.values(userBox.value.treats).reduce((total, curr) => total + curr, 0) === 8,
);

const getLargerImagePath = (image: string): string => {
  return image.split("?")[0];
};

const addTreat = (id: string): void => {
  const isTreat = Object.keys(userBox.value.treats).includes(id);
  if (isUserBoxFull.value) return;
  if (isTreat) {
    userBox.value.treats[id] += 1;
  } else {
    userBox.value.treats[id] = 1;
  }
};

const onClickMinus = (id: string): void => {
  const isTreat = Object.keys(userBox.value.treats).includes(id);
  if (!isTreat) return;

  if (userBox.value.treats[id] === 1) {
    delete userBox.value.treats[id];
  } else {
    userBox.value.treats[id] -= 1;
  }
};

const addUserBoxToCart = (): void => {
  addUserBox({ ...userBox.value });
  userBox.value = { id: "", treats: {} };
  userBox.value.id = uuidv4();
  treatType.value = null;
  window.scrollTo(0, 0);
};

const getTreatQuantityLabel = (treat: ITreat) => {
  return `${treat.bag} x ${treat.treatsPerBag} ${getTreatTypeLabel(treat)}`;
};

const changeTreatType = (type: TreatTypeEnum | null) => {
  treatType.value = type;
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
    <h3>Pick 8 items</h3>
    <div class="flex flex-col items-center">
      <div
        class="inline-flex rounded-md"
        role="group">
        <button
          type="button"
          class="px-4 py-2 text-xs uppercase font-semibold border border-gray-100 rounded-s-md"
          :class="
            treatType === null
              ? 'bg-gray-100 text-gray-800'
              : 'bg-white text-gray-500 hover:text-gray-600 hover:bg-gray-50'
          "
          @click="changeTreatType(null)">
          All
        </button>
        <button
          type="button"
          class="px-4 py-2 text-xs uppercase font-semibold border-t border-b border-gray-100"
          :class="
            treatType === TreatTypeEnum.Cookie
              ? 'bg-gray-100 text-gray-800'
              : 'bg-white text-gray-500 hover:text-gray-600 hover:bg-gray-50'
          "
          @click="changeTreatType(TreatTypeEnum.Cookie)">
          Cookies
        </button>
        <button
          type="button"
          class="px-4 py-2 text-xs uppercase font-semibold border border-gray-100 rounded-e-md"
          :class="
            treatType === TreatTypeEnum.Cake
              ? 'bg-gray-100 text-gray-800'
              : 'bg-white text-gray-500 hover:text-gray-600 hover:bg-gray-50'
          "
          @click="changeTreatType(TreatTypeEnum.Cake)">
          Cake
        </button>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center items-start">
      <div
        v-for="(item, index) in treatList"
        :key="`${item.name}-${index}`"
        class="w-full rounded ring-1 ring-gray-100 hover:ring-gray-200 transition-all p-2">
        <div
          class="h-48 w-full bg-contain bg-no-repeat bg-center"
          :style="`background-image: url(${item.image})`"></div>
        <div class="p-3">
          <div class="mb-2 text-right">
            <span class="text-sm text-violet-600 font-medium">
              {{ getTreatQuantityLabel(item) }}
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
              <template v-if="userBox.treats[item.id]">
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
                <div
                  class="select-none inline-flex items-center justify-center w-6 h-8 border-2 text-white bg-violet-600 border-violet-600">
                  {{ userBox.treats[item.id] }}
                </div>
                <button
                  type="button"
                  :disabled="isUserBoxFull"
                  class="text-white bg-violet-600 disabled:bg-gray-100 disabled:text-gray-300 font-medium rounded-r-full text-sm p-1.5 text-center inline-flex items-center"
                  @click.stop="addTreat(item.id)">
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
                :disabled="isUserBoxFull || isMaxBoxCount"
                class="text-white bg-violet-600 disabled:bg-gray-100 disabled:text-gray-300 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center"
                @click.stop="addTreat(item.id)">
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
    <div
      v-if="isUserBoxFull"
      class="flex justify-center my-4">
      <button
        type="button"
        class="px-6 py-3 text-center inline-flex items-center text-base font-medium text-white bg-violet-600 rounded-md"
        @click="addUserBoxToCart">
        Add to cart
      </button>
    </div>
  </div>
</template>
