import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocation } from "vue-router";
import { createPinia } from "pinia";
import { startCase, camelCase } from "lodash";
import { useRootStore } from "./stores";
import routes from "./router";
import { Boxes } from "./data";
import { BoxTypeParamEnum } from "./types";
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
  if (to.name === "BoxesPage") {
    const boxType = to.params.boxType as string;

    if (!(Object.values(BoxTypeParamEnum) as string[]).includes(boxType)) {
      return { name: "NotFoundPage" };
    }
  }
  if (to.name === "BoxPage") {
    const rootStore = useRootStore();
    const { setBox } = rootStore;

    const toBoxName = startCase(camelCase((to.params.name as string).replace("-", " ")));
    const boxFound = Boxes.find((item) => item.name === toBoxName);

    if (boxFound) {
      setBox(boxFound);
    } else {
      setBox(null);
    }
  }
  return true;
});
