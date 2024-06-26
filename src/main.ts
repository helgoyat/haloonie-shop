import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocation } from "vue-router";
import { createPinia, storeToRefs } from "pinia";
import { startCase, camelCase } from "lodash";
import { useRootStore } from "./stores";
import routes from "./router";
import { Boxes } from "./data";
import App from "./App.vue";
import "./styles/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
  strict: true,
});

createApp(App).use(createPinia()).use(router).mount("#app");

router.beforeEach((to: RouteLocation) => {
  const rootStore = useRootStore();
  const { box } = storeToRefs(rootStore);
  const { setBox } = rootStore;

  if (to.name === "OurBoxesPage") {
    const boxName = to.params.boxName as string;
    setBox(null);

    if (boxName) {
      const boxNameFormatted = startCase(
        camelCase((to.params.boxName as string).replace("-", " ")),
      );
      const boxFound = Boxes.find((item) => item.name === boxNameFormatted);

      if (boxFound) {
        setBox(boxFound);
      } else {
        return { name: "NotFoundPage" };
      }
    }
  } else if (box.value !== null) {
    setBox(null);
  }
  return true;
});
