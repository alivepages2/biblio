import Vue from "vue";
import Router from "vue-router";

// Containers
const TheContainer = () => import("@/containers/TheContainer");

// Views - Components
const Forms = () => import("@/views/base/Forms");
const Tables = () => import("@/views/base/Tables");

// Users
//const Users = () => import("@/views/users/Users");
///const User = () => import("@/views/users/User");

Vue.use(Router);

export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
});

function configRoutes() {
  return [
    {
      path: "/",
      redirect: "/base/tables",
      name: "Home",
      component: TheContainer,
      children: [
        {
          path: "base",
          redirect: "/base/",
          name: "Base",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "forms",
              name: "Forms",
              component: Forms,
            },
            {
              path: "tables",
              name: "Tables",
              component: Tables,
            },
          ],
        },
      ],
    },
  ];
}
