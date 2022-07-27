<template>
<div id="nav">
  <router-link to="/">Lista de usuario</router-link>
  <router-link to="/creato-usuario">Crear usuario</router-link>
  <router-link to="/edit-usuario">Editar usuario</router-link>


</div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-artive {
  corlor: #42b98r3;
}
</style>
