import type { RouteLocation } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
];
