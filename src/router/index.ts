import HomePage from "@/pages/HomePage.vue";
import OurBoxesPage from "@/pages/OurBoxesPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import TermsAndConditionsPage from "@/pages/Legal/TermsAndConditionsPage.vue";
import PrivacyPolicyPage from "@/pages/Legal/PrivacyPolicyPage.vue";
import FAQPage from "@/pages/Help/FAQPage.vue";
import ContactUsPage from "@/pages/Help/ContactUsPage.vue";
import NotFoundPage from "@/pages/Other/NotFoundPage.vue";
import CookiesPage from "@/pages/Admin/CookiesPage.vue";

export default [
  {
    path: "/admin",
    name: "CookiesPage",
    component: CookiesPage,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/our-boxes/:boxName?",
    name: "OurBoxesPage",
    component: OurBoxesPage,
  },
  {
    path: "/order",
    name: "OrderPage",
    component: OrderPage,
  },
  // LEGAL
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditionsPage",
    component: TermsAndConditionsPage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  // HELP
  {
    path: "/faq",
    name: "FAQPage",
    component: FAQPage,
  },
  {
    path: "/contact-us",
    name: "ContactUsPage",
    component: ContactUsPage,
  },
  // OTHER
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];
