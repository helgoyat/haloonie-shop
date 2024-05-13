<template>
  <div
    id="alert-additional-content-1"
    class="p-4 mb-4 text-violet-800 border border-violet-300 rounded-lg bg-violet-50 dark:bg-gray-800 dark:text-violet-400 dark:border-violet-800"
    role="alert">
    <div class="flex items-center">
      <svg
        class="flex-shrink-0 w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20">
        <path
          d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
      <h3 class="text-lg font-medium">This is a info alert</h3>
    </div>
    <div class="mt-2 text-sm">
      More info about this info alert goes here. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
    </div>
    <!-- <div class="flex mt-4">
      <button
        type="button"
        class="text-white bg-violet-800 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-violet-200 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
        <svg
          class="me-2 h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 14">
          <path
            d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
        View more
      </button>
      <button
        type="button"
        class="text-violet-800 bg-transparent border border-violet-800 hover:bg-violet-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-violet-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-violet-600 dark:border-violet-600 dark:text-violet-400 dark:hover:text-white dark:focus:ring-violet-800"
        data-dismiss-target="#alert-additional-content-1"
        aria-label="Close">
        Dismiss
      </button>
    </div> -->
  </div>
</template>
