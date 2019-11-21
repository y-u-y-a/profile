import Vue       from "vue"
import VueRouter from "vue-router"

import Home      from "./pages/Home"
import About     from "./pages/About"
import Port      from "./pages/Port"
import Contact   from "./pages/Contact"


Vue.use(VueRouter)

const router = new VueRouter({
  // mode: "history",
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
