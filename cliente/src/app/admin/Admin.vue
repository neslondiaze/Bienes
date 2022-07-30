<template>
  <nav-admin></nav-admin>

  <div class="container">
  <router-view></router-view>
  </div>
</template>

<script>
import NavAdmin from "./components/layouts/NavAdmin.vue";

export default {
  name: "Admin",
  components: {
    NavAdmin
  }
}
</script>

<style scoped>

</style>