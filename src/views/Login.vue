
<template>

  <!-- Material form login -->
    <div class="container"> 

        
        <form>
        <p class="h4 text-center mb-4 ">Iniciar sesion</p>
        <div class="grey-text">
        <mdb-input v-model="newUsername" label="nombre de usuario"  type="text"/>
        <mdb-input v-model="newContrasena" label="contraseña"  type="password"/>
        <p>{{newUsername}}</p>
        <p>{{newContrasena}}</p>
        </div>
        <div class="text-center">
          <ApolloQuery
      :query="gql => gql`
        query  ($newUsername: String!) {
          getUsuarioByUsername(nombre_usuario: $newUsername){
           ...usuario
          }
        }
        ${$options.fragments.usuario}
      `"
      :variables="{ newUsername }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured: {{error}}</div>

        <!-- Result -->
        <div v-else-if="data.getUsuarioByUsername[0]!=null" class="result apollo">{{ data.getUsuarioByUsername[0].contrasena }}
          <p v-if="data.getUsuarioByUsername[0].contrasena==newContrasena">contraseña correcta</p>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
        <button class="btn" v-on:click="login(data)" style="background-color:#05DFEB;" type="submit">Iniciar</button>
        <p>{{id}}</p>
        <p>{{autenticado}}</p>
        <p>{{idstore}}</p>
      </template>
    </ApolloQuery>

        </div>
    </form>
    </div>

  <!-- Material form login -->
</template>

<script>
  import { mdbInput } from 'mdbvue';
  import gql from 'graphql-tag'
  export default {
    name: 'Register',
    components: {
      mdbInput
    },
    fragments: {
    usuario: gql`
      fragment usuario on Usuario {
        id
        nombre_usuario
        contrasena
        nombres
        email
        rol{
          id
          nombre
        }
      }
    `
    },
    data () {
    return {
      id: 0,
      newMessage: '',
      newContrasena: '',
      newNombre: '',
      newEmail: '',
      newUsername: '',
      newRol: 1,
      resultId: 0,
      autenticado :  this.$store.getters.returnLogState,
      idstore: this.$store.getters.returnUser.id
    }
  },
  methods: {
    login(data) {
        if(data.getUsuarioByUsername[0]!=null ){
          if(data.getUsuarioByUsername[0].contrasena==this.newContrasena){
            this.id=data.getUsuarioByUsername[0].id;
            this.autenticado=true;
            window.alert("registro completado")
            var usuario={
              id: data.getUsuarioByUsername[0].id,
              name: data.getUsuarioByUsername[0].nombre,
              username: data.getUsuarioByUsername[0].nombre_usuario,
              email: data.getUsuarioByUsername[0].email,
              Rol: data.getUsuarioByUsername[0].rol.nombre,
            }
            this.$store.dispatch('storeUser',usuario)
            this.$store.dispatch('changeLogState',usuario)
            this.$router.push('/')
          }else{
            window.alert("contraseña incorrecta")
          }
        }else{
          window.alert("usuario no encontrado")
        }
    }
  }
  }
</script>

<style scoped>
</style>