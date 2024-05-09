<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { startCase, camelCase } from "lodash";

const route = useRoute();

const boxes = ref<string[]>([
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dw76e48d62/5900951251818_H1L1_7219122_S10.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwdb7ff4d0/3017760002905_H1N1_800367_S10.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwe19282d0/3061990142214_A1N1_5405800_S13.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dw1abe1a76/7622210422163_H1N1_21334_S10.png",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dw771729a3/5410126004021_A_7130141_S01.png?sw=250&sh=250&sm=fit",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dweae23f8a/4014400928891_H1N1_5008472_S10.png?sw=250&sh=250&sm=fit",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dw90d77e45/5410041005707_H1N1_409078_S10.png?sw=250&sh=250&sm=fit",
  "https://www.coursesu.com/dw/image/v2/BBQX_PRD/on/demandware.static/-/Sites-digitalu-master-catalog/default/dwfa805be9/5410041423600_H1N1_1425685_S10.png?sw=250&sh=250&sm=fit",
]);

const boxName = computed(() => {
  return startCase(camelCase((route.params.name as string).replace("-", " ")));
});
</script>

<template>
  <div class="content">
    <h2>{{ boxName }}</h2>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-80 h-px my-8 bg-violet-300 border-0" />
      <span class="absolute px-3 brand text-2xl text-violet-600 -translate-x-1/2 bg-white left-1/2">
        Cookies
      </span>
    </div>
    <div class="grid grid-cols-4 gap-6 justify-items-center">
      <div
        v-for="item in boxes"
        :key="item"
        class="w-full rounded ring-2 ring-gray-100 hover:ring-gray-200 transition-all">
        <div
          class="h-48 w-full bg-contain bg-no-repeat bg-center"
          :style="`background-image: url(${item})`"></div>
        <div class="p-5">
          <div class="text-lg font-semibold tracking-tight text-gray-900">Product Name</div>
          <div>Brand</div>
          <div class="text-gray-500 mt-2 flex flex-row justify-between gap-2">
            <div class="text-sm hover:underline hover:cursor-pointer">See details</div>
            <div class="text-sm">1 item</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center my-6">
      <button
        type="button"
        class="w-56 px-5 py-3 text-base font-medium text-center text-white bg-orange-500 rounded-full ring-2 ring-offset-4 ring-orange-300">
        Get a Box
      </button>
    </div>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-80 h-px my-8 bg-violet-300 border-0" />
      <span class="absolute px-3 brand text-2xl text-violet-600 -translate-x-1/2 bg-white left-1/2">
        Ingredients
      </span>
    </div>
    <div>
      <ul class="w-full text-sm space-y-6 text-gray-900 list-none list-inside">
        <li>
          <span class="font-semibold text-gray-900">Product Name - Brand</span>
          <div class="text-gray-500 mt-2">
            Chocolat au LAIT* 48% (sucre*, beurre de cacao*, LAIT entier en poudre*, pâte de
            cacao*), farine de BLE* (France) 36%, sucre*, BEURRE* 8,8%, LAIT ÉCRÉMÉ en poudre*,
            poudres à lever : carbonates d'ammonium et de potassium, sel, poudre de jus de citron*.
            Traces éventuelles de fruits à coque, d'oeuf, de soja et de graines de sésame. *
            ingrédient issu de l'agriculture biologique.
          </div>
        </li>
        <li>
          <span class="font-semibold text-gray-900">Product Name - Brand</span>
          <div class="text-gray-500 mt-2">
            Farine de BLÉ 37 %, chocolat au LAIT 27 % [sucre, pâte de cacao, beurre de cacao,
            lactosérum en poudre (de LAIT), LAIT écrémé en poudre, graisses végétales (karité, palme
            en proportion variable), BEURRE pâtissier, émulsifiants (lécithines de SOJA, E476),
            lactose (de LAIT), arôme], huile de palme, farine de BLÉ complète 12 %, sucre, sirop de
            sucre, poudres à lever (carbonates de sodium, carbonates d'ammonium), sel, correcteur
            d'acidité (acide citrique). PEUT CONTENIR OEUF, SÉSAME, FRUITS À COQUE. Fabriqué à
            Cestas. Blé français.
          </div>
        </li>
        <li>
          <span class="font-semibold text-gray-900">Product Name - Brand</span>
          <div class="text-gray-500 mt-2">
            Farine de BLÉ 47 %, huiles végétales (palme, coprah), sucre, chocolat en poudre 7,5 %
            (sucre, cacao en poudre), lactose (de LAIT), poudres à lever (carbonates d'ammonium,
            carbonates de sodium), LAIT entier en poudre, pâte de cacao, sel, pâte de NOISETTES,
            émulsifiant (lécithines de SOJA).PEUT CONTENIR OEUF ET AUTRES FRUITS À COQUE.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
