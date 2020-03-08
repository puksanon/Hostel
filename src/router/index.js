import Vue from "vue";
import VueRouter from "vue-router";
// import { currentUser } from '../firebase/firebaseInit'
Vue.use(VueRouter);

//other page
const NotFound      = () => import("@/views/NotFound.vue");
const Home          = () => import("@/views/Home.vue");
const HostelDetail  = () => import('@/views/HostelDetail.vue')

//admin 
const AdminDashboard= () => import('@/views/admin/AdminDashboard.vue')
const ManageHostel  = () => import('@/views/admin/ManageHostel.vue')
const ManageUser  = () => import('@/views/admin/ManageUser.vue')
//user

  
const router = new VueRouter({
  mode: "history",
  routes :[
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
      component : AdminDashboard,
    },
    {
      path: "/admin/managehostel",
      component : ManageHostel,
    },
    {
      path: "/admin/manageuser",
      component : ManageUser,
    },
  ]
});

  export default router;