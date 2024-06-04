import { createWebHistory, createRouter } from "vue-router";

import Main from "@/page/Main/Main.vue";
import Events from "@/page/Events/Index.vue";
import Programs from "@/page/Programs/Index.vue";
import InPersonFullCourse from "@/page/Programs/InPersonFullCourse.vue";
import OnlineElectiveCourse from "@/page/Programs/OnlineElectiveCourse.vue";
import FreeElectiveCourse from "@/page/Programs/FreeElectiveCourse.vue";
import ContactUs from "@/page/ContactUs/Index.vue";
import AboutUs from "@/page/About/Index.vue";
import Search from "@/page/Search/Index.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SearchLayout from "@/layouts/SearchLayout.vue";
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
        meta: {
          layout: DefaultLayout,
        },
      },
      {
        path: "FCP/events",
        name: "Events",
        component: Events,
        meta: {
          layout: DefaultLayout,
        },
      },
      {
        path: "FCP/contact-us",
        name: "ContactUs",
        component: ContactUs,
        meta: {
          layout: DefaultLayout,
        },
      },
      {
        path: "FCP/programs",
        children: [
          {
            path: "programs",
            name: "Programs",
            component: Programs,
            meta: {
              layout: DefaultLayout,
            },
          },
          {
            path: "In-Person-Full-Course",
            name: "full_course",
            component: InPersonFullCourse,
            meta: {
              layout: DefaultLayout,
            },
          },
          {
            path: "Online-Elective-Course",
            name: "online_elective_course",
            component: OnlineElectiveCourse,
            meta: {
              layout: DefaultLayout,
            },
          },
          {
            path: "Free-Elective-Course",
            name: "free_elective_course",
            component: FreeElectiveCourse,
            meta: {
              layout: DefaultLayout,
            },
          },
        ],
      },
      {
        path: "FCP/about-us",
        name: "AboutUs",
        component: AboutUs,
        meta: {
          layout: DefaultLayout,
        },
      },
      {
        path: "FCP/search",
        name: "Search",
        component: Search,
        meta: {
          layout: SearchLayout,
        },
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

  next();
});

export default router;
