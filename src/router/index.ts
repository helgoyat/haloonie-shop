import HomePage from "@/pages/HomePage.vue";
import MakeYourBoxPage from "@/pages/MakeYourBoxPage.vue";
import BoxesPage from "@/pages/BoxesPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import TermsAndConditionsPage from "@/pages/Legal/TermsAndConditionsPage.vue";
import PrivacyPolicyPage from "@/pages/Legal/PrivacyPolicyPage.vue";
import HowItWorksPage from "@/pages/Help/HowItWorksPage.vue";
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
    path: "/make-your-box",
    name: "MakeYourBoxPage",
    component: MakeYourBoxPage,
  },
  {
    path: "/:boxType/:boxName?",
    name: "BoxesPage",
    component: BoxesPage,
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
    path: "/how-it-works",
    name: "HowItWorksPage",
    component: HowItWorksPage,
  },
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
