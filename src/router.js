import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/views/Home.vue"),
    },
    {
      path: '/login',
      name: 'Loginr',
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
    {
      path: '/index_teachers',
      name: 'IndexTeachers',
      component: () => import("@/views/Index_teachers.vue"),
    },
    {
      path: '/index_students',
      name: 'IndexStudents',
      component: () => import("@/views/Index_students.vue"),
    }
    
  ]
})