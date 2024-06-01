<template>
  <footer class="bg-gray-50">
    <div class="max-w-screen-lg mx-auto p-4">
      <div class="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h4>
          <ul class="text-gray-600 font-medium">
            <li class="mb-4">haloonie@email.com</li>
            <li class="mb-4">Reston VA, USA</li>
          </ul>
        </div>
        <div>
          <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Help center</h4>
          <ul class="text-gray-600 font-medium">
            <li class="mb-4">
              <router-link
                :to="{ name: 'FAQPage' }"
                class="hover:underline">
                F.A.Q.
              </router-link>
            </li>
            <li class="mb-4">
              <router-link
                :to="{ name: 'HowItWorksPage' }"
                class="hover:underline">
                How it works
              </router-link>
            </li>
            <li class="mb-4">
              <router-link
                :to="{ name: 'ContactUsPage' }"
                class="hover:underline">
                Contact us
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h4>
          <ul class="text-gray-600 font-medium">
            <li class="mb-4">
              <router-link
                :to="{ name: 'PrivacyPolicyPage' }"
                class="hover:underline">
                Privacy Policy
              </router-link>
            </li>
            <li class="mb-4">
              <router-link
                :to="{ name: 'TermsAndConditionsPage' }"
                class="hover:underline">
                Terms and Conditions
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h4>
          <div class="flex flex-row gap-2">
              <a
                href="#">
                <svg
                  class="w-8 h-8 text-white bg-gray-700 rounded-full p-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd" />
                </svg>
              </a>
              <a
                href="#">
                <svg
                  class="w-8 h-8 text-white bg-gray-700 rounded-full p-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd" />
                </svg>
              </a>
              </div>
        </div>
      </div>
      <div class="py-2 rounded-md text-center">
        <span class="text-sm text-gray-500">
          © 2024
          <a href="https://flowbite.com/">Haloonie</a>
          - All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
