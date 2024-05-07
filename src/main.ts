import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocation } from "vue-router";
import { createPinia } from "pinia";
import routes from "./router";
import App from "./App.vue";
import "./styles/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to: RouteLocation) => {
  console.log(to.params);
  return true;
});

createApp(App).use(createPinia()).use(router).mount("#app");
