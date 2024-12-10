import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";

import "./main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./pages/index.vue") },
    { path: "/gallery", component: () => import("./pages/gallery.vue") },
    { path: "/authors", component: () => import("./pages/authors.vue") },
    {
      path: "/authors/:id",
      component: () => import("./pages/author.vue"),
      props: true,
    },
    {
      path: "/gallery/:id",
      component: () => import("./pages/art.vue"),
      props: true,
    },
    { path: "/profile", component: () => import("./pages/profile.vue") },
  ],
});

createApp(RouterView).use(router).mount("body");
