import { createWebHistory, createRouter } from "vue-router";

import Main from "@/page/Main/Main.vue";
import Events from "@/page/Events/Index.vue";
import Programs from "@/page/Programs/Index.vue";
import InPersonFullCourse from "@/page/Programs/InPersonFullCourse.vue";
import OnlineElectiveCourse from "@/page/Programs/OnlineElectiveCourse.vue";
import FreeElectiveCourse from "@/page/Programs/FreeElectiveCourse.vue";
import ContactUs from "@/page/ContactUs/Index.vue";
import { i18n, updateLang } from "@/locales/index";

const {
  global: {
    availableLocales,
    fallbackLocale,
    locale: { value: currentLocale },
  },
} = i18n;

const routes = [
  {
    path: "/",
    redirect: {
      name: "Main",
      params: { lang: fallbackLocale.value },
    },
  },
  {
    path: "/:lang",
    children: [
      {
        path: "FCP",
        redirect: {
          name: "Main",
          params: { lang: currentLocale },
        },
      },
      {
        path: "FCP/main",
        name: "Main",
        component: Main,
      },
      {
        path: "FCP/events",
        name: "Events",
        component: Events,
      },
      {
        path: "FCP/contact-us",
        name: "ContactUs",
        component: ContactUs,
      },
      {
        path: "FCP/programs",
        children: [
          {
            path: "programs",
            name: "Programs",
            component: Programs,
          },
          {
            path: "In-Person-Full-Course",
            name: "full_course",
            component: InPersonFullCourse,
          },
          {
            path: "Online-Elective-Course",
            name: "online_elective_course",
            component: OnlineElectiveCourse,
          },
          {
            path: "Free-Elective-Course",
            name: "free_elective_course",
            component: FreeElectiveCourse,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  const {
    params: { lang },
  } = to;
  // adjust locale
  if (!availableLocales.includes(lang)) {
    console.error(
      `invalid lang in url, redirect to fallback locale:${fallbackLocale.value}`
    );
    next(`${fallbackLocale.value}/FCP`);
  } else {
    updateLang(lang);
  }
  console.log("test2");

  next();
});

export default router;
