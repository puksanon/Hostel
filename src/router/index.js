import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//other page
const NotFound      = () => import("@/views/NotFound.vue");
const Home          = () => import("@/views/Home.vue");
const HostelDetail  = () => import('@/views/HostelDetail.vue')

//admin 
const AdminDashboard= () => import('@/views/admin/AdminDashboard.vue')

//user


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
    {
      path: "/hostel_detail/:id",
      component : HostelDetail
    },
    {
      path: "/admin/dashboard",
      component : AdminDashboard
    },
    
  ];
  
  const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;