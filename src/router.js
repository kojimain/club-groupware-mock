import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import MemberLayout from "./layouts/member";
import MemberIndexPage from "./pages/member/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: IndexPage
  },
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/member",
    component: MemberLayout,
    children: [
      {
        path: "",
        component: MemberIndexPage
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
