import { createApp } from "vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "@/styles/base.scss";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "virtual:uno.css";
import { i18n } from "@/locales";
import router from "@/router";

import IconVue from "./components/Icon.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
});

const pinia = createPinia();
pinia.use(
  createPersistedState({
    storage: sessionStorage,
  })
);
myApp.use(pinia);

myApp.use(router);

myApp.use(i18n);

myApp.component("FCPIcon", IconVue);

myApp.mount("#app");
