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
    {
      path: '/index_teachers',
      name: 'IndexTeachers',
      component: () => import("@/views/Index_teachers.vue"),
    },
    {
      path: '/index_students',
      name: 'IndexStudents',
      component: () => import("@/views/Index_students.vue"),
    },
    {
      path: '/cursos_teachers',
      name: 'CursosTeachers',
      component: () => import("@/views/Cursos_teachers.vue"),
    },
    {
      path: '/trabajos_teachers',
      name: 'TrabajosTeachers',
      component: () => import("@/views/Trabajos_teachers.vue"),
    },
    {
      path: '/calendario_teachers',
      name: 'CalendarioTeachers',
      component: () => import("@/views/Calendario_teachers.vue"),
    },
    {
      path: '/cursos_crear',
      name: 'CursosCrear',
      component: () => import("@/views/Cursos_crear.vue"),
    }
  ]
})