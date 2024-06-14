<script setup lang="ts">
import Info from "@/components/Elements/Info.vue";
</script>

<template>
  <div class="w-full grid grid-cols-1 gap-8">
    <h2 class="text-left">Fill-in Shipping Address</h2>
    <form class="max-w-2xl w-full">
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="mb-6">
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
        <div class="mb-6">
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
      <div class="mb-6">
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
      <div class="mb-6">
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
      <div class="mb-6">
        <label
          for="pickuplocation"
          class="block mb-2 text-base font-medium text-gray-900">
          FedEx Pick-up Location
        </label>
        <select
          id="pickuplocation"
          class="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5">
          <option selected>Select</option>
          <option value="Reston">Reston</option>
          <option value="Washington">Washington D.C.</option>
          <option value="Herndon">Herndon</option>
          <option value="Fairfax">Fairfax</option>
        </select>
      </div>
      <div class="mb-6">
        <info />
      </div>
      <div>
        <label class="inline-flex items-center me-5 cursor-pointer">
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
    </form>
  </div>
</template>
