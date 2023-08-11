import store from "@/store";
import { GET_USER } from "@/store/actions/auth";
import Vue from "vue";
import VueRouter from "vue-router";
import customAxios from "@/utils/axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "base",
    component: () => import("../views/HomePage.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        return next({
          path: "/home",
        });
      } else {
        return next({
          path: "/login",
        });
      }
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomePage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignupView.vue")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../views/PersonalPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat/:userId",
    name: "chat",
    component: () => import("../views/ChatPage.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/userinfo",
    name: "userinfo",
    component: () => import("../views/UserinfoPage.vue"),
    meta: {
      requiresAuth: true,
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      customAxios.defaults.headers.common["Authorization"] = `Bearer ${store.state.Auth.token}`;
      store.dispatch(GET_USER);
      return next();
    } else {
      return next({
        name: "login",
        query: {
          redirect: to.path,
        },
      });
    }
  } else {
    return next();
  }
});

export default router;
