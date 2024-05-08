// import type { RouteLocation } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import OurBoxesPage from "@/pages/OurBoxesPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

export default [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: HomePage,
  },
  {
    path: "/our-boxes",
    name: "OurBoxesPage",
    component: OurBoxesPage,
  },
  {
    path: "/specials",
    name: "SpecialsPage",
    component: HomePage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];
