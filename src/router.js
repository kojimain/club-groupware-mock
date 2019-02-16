import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "./pages/index";
import LoginPage from "./pages/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: IndexPage
  },
  {
    path: "/login",
    component: LoginPage
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
