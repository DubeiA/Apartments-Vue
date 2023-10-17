import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      name: "home",
    },
    {
      path: "/about/:id",
      component: ApartmentPage,
      name: "about",
    },
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
      name: "error-page",
    },
    {
      path: "/login",
      component: LoginPage,
      name: "login",
    },
  ],
});

export default router;
