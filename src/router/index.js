import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
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
  },
  {
    path: '/cursos_ver/:id',
    name: 'Cursover',
    component: () => import("@/views/Cursos_ver.vue"),
  },
  {
    path: '/cursos_agregar_est/:id',
    name: 'AgregarEst',
    component: () => import("@/views/Cursos_agregar_estudiante.vue"),
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
