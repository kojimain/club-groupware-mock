import Vue from "vue";
import VueRouter from "vue-router";

import IndexPage from "./pages/index";
import LoginPage from "./pages/login";
import MemberLayout from "./layouts/member";
import MemberIndexPage from "./pages/member/index";
import MemberClubsIdLayout from "./layouts/member/clubs/_id";
import MemberClubsIdIndexPage from "./pages/member/clubs/_id/index";
import MemberEditPage from "./pages/member/edit";
import MemberClubsIdEditPage from "./pages/member/clubs/_id/edit";
import MemberClubsIdMembersIndexPage from "./pages/member/clubs/_id/members/index";
import MemberClubsNewPage from "./pages/member/clubs/new";

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
      },
      {
        path: "edit",
        component: MemberEditPage
      },
      {
        path: "clubs/new",
        component: MemberClubsNewPage
      }
    ]
  },
  {
    path: "/member/clubs/:club_id",
    component: MemberClubsIdLayout,
    children: [
      {
        path: "",
        component: MemberClubsIdIndexPage
      },
      {
        path: "edit",
        component: MemberClubsIdEditPage
      },
      {
        path: "members",
        component: MemberClubsIdMembersIndexPage
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
