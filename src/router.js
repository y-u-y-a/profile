import Vue       from "vue"
import VueRouter from "vue-router"

import Home      from "./pages/home.vue"
import About     from "./pages/about.vue"
import Port      from "./pages/port.vue"
import Contact   from "./pages/contact.vue"


Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: "/profile",
  routes: [
    {
        path     : "/",
        component: Home
    },
    {
      path     : "/home",
      component: Home
    },
    {
      path     : "/about",
      component: About
    },
    {
      path     : "/port",
      component: Port
    },
    {
      path     : "/contact",
      component: Contact
    }
  ]
});

export default router
