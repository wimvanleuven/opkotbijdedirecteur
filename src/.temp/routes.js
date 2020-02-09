export default [
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/wvl/Workspaces/highestpoint/opkotbijdedirecteur/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/wvl/Workspaces/highestpoint/opkotbijdedirecteur/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/wvl/Workspaces/highestpoint/opkotbijdedirecteur/node_modules/gridsome/app/pages/404.vue")
  }
]

