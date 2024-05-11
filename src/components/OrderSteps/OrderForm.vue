<script setup lang="ts"></script>

<template>
  <form class="max-w-2xl w-full">
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900">
          First Name
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900">
          Last Name
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required />
      </div>
    </div>
    <div class="mb-5">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900">
        Email
      </label>
      <input
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
        placeholder="name@flowbite.com"
        required />
    </div>
    <div class="mb-5">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900">
        Your password
      </label>
      <input
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-300 focus:border-violet-300 block w-full p-2.5"
        required />
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-violet-300"
          required />
      </div>
      <label
        for="remember"
        class="ms-2 text-sm font-medium text-gray-900">
        Remember me
      </label>
    </div>
  </form>
</template>
