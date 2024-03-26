import { createWebHistory, createRouter } from "vue-router";

import Main from "@/page/Main/Main.vue";
import Events from "@/page/Events/Index.vue";
import Programs from "@/page/Programs/Index.vue";
import InPersonFullCourse from "@/page/Programs/InPersonFullCourse.vue";
import OnlineElectiveCourse from "@/page/Programs/OnlineElectiveCourse.vue";
import FreeElectiveCourse from "@/page/Programs/FreeElectiveCourse.vue";
import ContactUs from "@/page/ContactUs/Index.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "Main",
    },
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/programs",
    children: [
      {
        path: "/programs",
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
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: "Main",
    },
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
  next();
});

export default router;
