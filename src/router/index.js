import Vue from "vue";
import VueRouter from "vue-router";
const fb = require('../firebase/firebaseInit')
Vue.use(VueRouter);

//other page
const NotFound      = () => import("@/views/NotFound.vue");
const Home          = () => import("@/views/Home.vue");
const HostelDetail  = () => import('@/views/HostelDetail.vue')
const Login         = () => import('@/views/Signin')
const SignUp        = () => import('@/views/Signup')

//admin 
const AdminDashboard= () => import('@/views/admin/AdminDashboard.vue')
const ManageHostel  = () => import('@/views/admin/ManageHostel.vue')
const ManageUser    = () => import('@/views/admin/ManageUser.vue')
//user

const UserDashboard = () => import('@/views/user/Dashboard')

  
const router = new VueRouter({
  mode: "history",
  routes :[
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      path: "/",
      name: "Home",
      component : Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/hostel_detail/:id",
      name : "HostelDetail",
      component : HostelDetail
    },
    {
      path: "/admin/dashboard",
      name:"AdminDashboard",
      component : AdminDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin/managehostel",
      name: "ManageHostel",
      component : ManageHostel,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user/dashboard",
      name: "UserDashboard",
      component : UserDashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/admin/manageuser",
      name: "ManageUser",
      component : ManageUser,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth.currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router