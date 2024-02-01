import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Show from "./components/Show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/show/id",
      name: "show",
      component: () => import("./components/Show.vue"),
    },
  ],
});

export { router };
