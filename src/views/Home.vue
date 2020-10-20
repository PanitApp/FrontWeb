<template>
  <div class="home">
    <img alt="MDB logo" src="../assets/logo-mdb-vue-small.png">
    <HelloWorld msg="Welcome to Your MDB Vue.js App"/>
    <h1 v-if="idstore==-1">no has iniciado sesion</h1>
    <h1 v-else>buenas humane: {{nombreusuario}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      idstore: this.$store.state.user.id,
      nombreusuario: this.$store.state.user.username
    }
  }
}
</script>
