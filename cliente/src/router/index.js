import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home.vue";
import adminRouter from "../app/admin/router";


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/admin',
    ...adminRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
