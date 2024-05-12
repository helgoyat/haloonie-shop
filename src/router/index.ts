import HomePage from "@/pages/HomePage.vue";
import OurBoxesPage from "@/pages/OurBoxesPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import SpecialBoxesPage from "@/pages/SpecialBoxesPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import BoxPage from "@/pages/BoxPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

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
    path: "/our-boxes",
    name: "OurBoxesPage",
    component: OurBoxesPage,
  },
  {
    path: "/special-boxes",
    name: "SpecialBoxesPage",
    component: SpecialBoxesPage,
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
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];
