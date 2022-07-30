<template>
<h3>REGISTRAR USUARIOS</h3>
<form @submit.prevent="onStore">
  <div class="my-3">
    <label for="usuario">Usuario</label>
    <input type="text" class="form-control" id="usuario" v-model="usuario.nomUsuario">
    </div>
  <div class="my-3">
    <label for="password">Password</label>
    <input type="text" class="form-control" id="password" v-model="usuario.passUsuario">
    </div>
  <div class="my-3">
    <label for="nivel">Nivel</label>
    <select id="tipo" class="form-select" v-model="usuario.nivelID">
      <option value="sisAdmin">SisAdmin</option>
      <option value="director">Director</option>
      <option value="auditor">Auditor</option>
      <option value="registrador">Registrador</option>
      <option value="operador">Operador</option>
    </select>
    </div>
    <div class="my-3 text-end">
      <div class="btn-group">
       <button class="btn btn-primary" type="submit">REGISTRAR</button>
       <button class="btn btn-secondary" @click="onCancel">CANCELAR</button>
      </div>
    </div>
</form>
</template>

<script>
import { storeUsuario } from "../../../../services/usuario-services";

export default {
  name: "usuario-create",
  data(){
    return{
      usuario:{
        nomUsuario: null,
        passUsuario: null,
        nivelID: null
      }
    }
  },
  methods:{
    async onStore(){
      const { msg } = await storeUsuario(this.usuario);
      console.log(msg);
      this.$router.push('usuario-index')
    },
    onCancel(){
      this.$router.push('usuario-index')
    }
  }

}
</script>

<style scoped>

</style>