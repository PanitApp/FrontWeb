import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import("@/views/Home.vue"),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import("@/views/Login.vue"),
    },
    {
      path: '/apollo',
      name: 'Apollo',
      component: () => import("@/components/ApolloExample.vue"),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import("@/views/Register.vue"),
    },
    
  ]
})
