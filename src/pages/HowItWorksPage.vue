<script setup lang="ts">
import InfoBoxTypes from "@/components/Elements/InfoBoxTypes.vue";
</script>

<template>
  <div class="content">
    <h2>How it works</h2>
    <h6>Three ways to shop.</h6>
    <info-box-types />
    <h6>Learn how a treat card works.</h6>
    <div class="flex md:flex-row flex-col items-center gap-6">
      <div class="max-w-[280px] w-full rounded ring-1 ring-gray-300 transition-all p-2">
        <div class="h-48 w-full">
          <svg
            class="w-48 h-48 text-gray-400 m-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
              clip-rule="evenodd" />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <div class="p-3">
          <div class="mb-2 text-right">
            <span
              class="text-sm text-emerald-500 bg-emerald-100 font-medium pl-2.5 pr-1 py-1 rounded-s-full">
              1 x
            </span>
            <span
              class="text-sm text-emerald-50 bg-emerald-400 font-medium pr-2.5 pl-2 py-1 rounded-e-full">
              6 cookies
            </span>
          </div>
          <div class="text-lg font-semibold text-gray-900">Name</div>
          <div>Brand</div>
          <div class="text-sm text-gray-500">Description</div>
          <div class="text-gray-400 mt-2 flex flex-row justify-between gap-2 items-center">
            <a
              class="text-sm hover:underline hover:cursor-pointer"
              target="_blank">
              See image
            </a>
            <div class="flex items-center">
              <button
                type="button"
                class="text-white bg-violet-600 font-medium rounded-full text-sm p-1.5 text-center inline-flex items-center">
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
      <div class="flex flex-col gap-4">
        <div class="font-semibold">Note that 1 treat item is defined by:</div>
        <div class="flex flex-row gap-2 items-center">
          <span
            class="text-sm text-emerald-500 bg-emerald-100 font-medium pl-2.5 pr-1 py-1 rounded-s-full text-nowrap">
            1 x
          </span>
          <span>is the number of individual packages a treat item includes.</span>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <span
            class="text-sm text-emerald-50 bg-emerald-400 font-medium pr-2.5 pl-2 py-1 rounded-e-full text-nowrap">
            6 cookies
          </span>
          <span>is the number of cookies per individual package.</span>
        </div>
        <div class="font-semibold">
          Example:
          <span
            class="text-sm text-emerald-500 bg-emerald-100 font-medium pl-2.5 pr-1 py-1 rounded-s-full ms-1 text-nowrap">
            2 x
          </span>
          <span
            class="text-sm text-emerald-50 bg-emerald-400 font-medium pr-2.5 pl-2 py-1 rounded-e-full me-1 text-nowrap">
            6 cookies
          </span>
          means 1 treat item contains 12 cookies.
        </div>
      </div>
    </div>
  </div>
</template>
