import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue")
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
    component: () => import("../views/PersonalPage.vue")
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/ChatPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
