import HomePage from "@/pages/HomePage.vue";
import BoxesPage from "@/pages/BoxesPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import BoxPage from "@/pages/BoxPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import CookiesPage from "@/pages/CookiesPage.vue";

export default [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/boxes/:boxType",
    name: "BoxesPage",
    component: BoxesPage,
  },
  {
    path: "/box/:name",
    name: "BoxPage",
    component: BoxPage,
  },
  {
    path: "/order",
    name: "OrderPage",
    component: OrderPage,
  },
  {
    path: "/cookies",
    name: "CookiesPage",
    component: CookiesPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];
