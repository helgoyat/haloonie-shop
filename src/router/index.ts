import HomePage from "@/pages/HomePage.vue";
import OurBoxesPage from "@/pages/OurBoxesPage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import TermsAndConditionsPage from "@/pages/Legal/TermsAndConditionsPage.vue";
import PrivacyPolicyPage from "@/pages/Legal/PrivacyPolicyPage.vue";
import FAQPage from "@/pages/Help/FAQPage.vue";
import ContactUsPage from "@/pages/Help/ContactUsPage.vue";
import NotFoundPage from "@/pages/Other/NotFoundPage.vue";

export default [
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];
