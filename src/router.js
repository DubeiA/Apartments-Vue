import { createRouter, createWebHistory } from "vue-router";
import store from "./components/store/store";

const HomePage = () => import("./pages/HomePage.vue");
const ApartmentPage = () => import("./pages/ApartmentPage.vue");
const LoginPage = () => import("./pages/LoginPage.vue");
const ErrorPage = () => import("./pages/ErrorPage.vue");
const RegistrationPage = () => import("./pages/RegistrationPage.vue");
const Orders = () => import("./pages/Orders.vue");

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    {
      path: "/login",
      component: LoginPage,
      name: "login",
      meta: {
        hideAuth: true,
      },
    },
    {
      path: "/register",
      component: RegistrationPage,
      name: "register",
      meta: {
        hideAuth: true,
      },
    },
    {
      path: "/",
      component: HomePage,
      name: "home",
      meta: {
        requiredAuth: true,
      },
    },

    {
      path: "/about/:id",
      component: ApartmentPage,
      name: "about",
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/orders",
      component: Orders,
      name: "orders",
      meta: {
        requiredAuth: true,
      },
    },

    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
      name: "error-page",
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(store.getters["auth/isLoggedIn"]);
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (!isLoggedIn) {
      next({ name: "login" });
    }
  }
  if (to.matched.some((record) => record.meta.hideAuth)) {
    if (isLoggedIn) {
      next({ name: "home" });
    }
  }

  next();
});

export default router;
