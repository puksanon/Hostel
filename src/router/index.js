import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const NotFound = () => import("@/views/NotFound.vue");
const Home     = () => import("@/views/Home.vue");
const routes = [
    {
      path: "*",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      path: "/",
      component : Home
    },
    
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;