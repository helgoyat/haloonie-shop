<script setup lang="ts">
import Info from "@/components/Elements/Info.vue";
</script>

<template>
  <div class="w-full grid grid-cols-1 gap-8">
    <h2 class="text-left">Fill-in Form</h2>
    <form class="max-w-2xl w-full grid grid-cols-1 gap-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label
            for="firstName"
            class="block mb-2 text-base font-medium text-gray-900">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
            placeholder="First name"
            required />
        </div>
        <div>
          <label
            for="lastName"
            class="block mb-2 text-base font-medium text-gray-900">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
            placeholder="Last name"
            required />
        </div>
      </div>
      <div>
        <label
          for="email"
          class="block mb-2 text-base font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
          placeholder="Email"
          required />
      </div>
      <div>
        <label
          for="confirmEmail"
          class="block mb-2 text-base font-medium text-gray-900">
          Confirm Email
        </label>
        <input
          type="email"
          id="confirmEmail"
          class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
          placeholder="Confirm email"
          required />
      </div>
      <div class="my-2">
        <info />
        <label class="inline-flex items-center me-5 cursor-pointer mt-6">
          <input
            type="checkbox"
            value=""
            class="sr-only peer" />
          <div
            class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          <span class="ms-3 text-base font-medium text-gray-900 select-none">
            I agree to the Terms and Conditions
          </span>
        </label>
      </div>
      <div class="flex flex-row-reverse">
        <button
          type="button"
          :disabled="false"
          class="px-6 py-3 text-base disabled:bg-gray-100 disabled:text-gray-300 font-medium text-center text-white bg-violet-600 rounded-md">
          Order
        </button>
      </div>
    </form>
  </div>
</template>
