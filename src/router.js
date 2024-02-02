import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppShow from "./components/AppShow.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/show",
      name: "show",
      component: AppShow,
    },
  ],
});

export { router };
