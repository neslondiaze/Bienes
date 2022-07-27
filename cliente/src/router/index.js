import { createRouter, createWebHashHistory } from 'vue-router'
import UsuarioIndex from "../components/usuario/UsuarioIndex.vue";




const routes = [
  {
    path: '/',
    component: UsuarioIndex
  },
  {
    path: '/creato-usuario',
    component: () => import(/* webpackChunkName: "create-usuario" */ '../components/usuario/UsuarioCreate.vue')
  },
  {
    path: '/edit-usuario',
    component: () => import(/* webpackChunkName: "edit-usuario" */ '../components/usuario/UsuarioEdit.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
