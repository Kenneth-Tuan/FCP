import { createWebHistory, createRouter } from "vue-router";

import Main from "@/page/Main/Main.vue";

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
