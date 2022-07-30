<template>

<button class="btn btn-primary" @click="$router.push('usuario-create')">NUEVO USUARIO</button>
<div class="row">
  <div class="col-md-4 my-3" v-for="usuario in usuarios">
   <div class="card ">
    <div class="card-body">
     <h3>usuario: {{ usuario.NomUsuario }}</h3>
     <h4>password: {{ usuario.passUsuario }}</h4>
     <h5>nivel: {{ usuario.nivelID }}</h5>
    </div>
    <div class="card-footer text-end">
      <div class="btn-group">
        <button class="btn btn-outline-success border-0">Editar</button>
        <button class="btn btn-outline-danger border-0">Eliminar</button>

      </div>
    </div>
  </div>
  </div>
</div>

</template>

<script>
import {getUsuarios} from "../../../../services/usuario-services";

export default {
name: "usuario-index",
data(){
  return{
    usuarios:[]
  }
},
methods:{
  async onInit(){
    this.usuarios = await getUsuarios()
  }
},
   created(){
    this.onInit()
  }
}
</script>

<style scoped>

</style>