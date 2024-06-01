<template>
  <footer class="bg-gray-50">
    <div class="max-w-screen-lg mx-auto p-4">
      <div class="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h4 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h4>
          <ul class="text-gray-600 font-medium">
            <li class="mb-4 inline-flex gap-2">
              <svg
                class="w-6 h-6 text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                  clip-rule="evenodd" />
              </svg>
              haloonie@mail.com
            </li>
            <li class="mb-4 inline-flex gap-2">
              <svg
                class="w-6 h-6 text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                  clip-rule="evenodd" />
                <path
                  fill="currentColor"
                  d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
              </svg>
              +1 (703) 789-4562
            </li>
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
            <a href="#">
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
            <a href="#">
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
