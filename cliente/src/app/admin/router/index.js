import UsuarioIndex from "../components/usuario/UsuarioIndex.vue";
import UsuarioCreate from "../components/usuario/UsuarioCreate.vue"

export default {
  name: 'admin',
  component: () => import(/* webpackChunkName: "admin" */ '../Admin.vue'),
  children: [
    {
      path: 'usuario-index',
      component: UsuarioIndex,
    },
    {
      path: 'usuario-create',
      component: UsuarioCreate,
    }
  ]
}

