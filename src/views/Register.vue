<template>
   
          <div class="container">
        <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <div class="grey-text">
      <mdb-input v-model="newUsername" label="nombre de usuario"  type="text"/>
      <mdb-input v-model="newEmail" label="correo"  type="email"/>
      <mdb-input v-model="newNombre" label="nombres"  type="text"/>
      <mdb-input v-model="newContrasena" label="contraseña"  type="password"/>
    <select v-model="newRol" class="browser-default custom-select">
    <option selected>seleccione el rol </option>
    <option value="1">estudiante</option>
    <option value="2">profesor</option>
  </select>
    </div>
    <div class="text-center">
      <mdb-btn color="primary" @click="registrarme()">Register</mdb-btn>
    </div>
  </form>
        <p>{{newUsername}}</p>
        <p>{{newNombre}}</p>
        <p>{{newContrasena}}</p>
        <p>{{newEmail}}</p>
        <p>{{newRol}}</p>
          </div>

    
</template>

<script>
import gql from 'graphql-tag'
import { mdbInput, mdbBtn } from 'mdbvue';
const registrar= gql`
    mutation crearUsuario($usuario: RegisterInput){
      crearUsuario(usuario:$usuario){
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

    }

    `
  
export default {
    components: {
      mdbInput,
      mdbBtn
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
      newRol: -1,
      resultId: 0
    }
  },
  methods: {
      registrarme: function(){
          this.$apollo.mutate({
       mutation: registrar,
       variables: {
         usuario: {
          nombre_usuario: this.newUsername,
          contrasena: this.newContrasena,
          nombres: this.newNombre,
          email: this.newEmail,
          rol: parseInt(this.newRol)
        },
       },
       update: (cache, { data: { crearUsuario } }) => {
         // Read the data from our cache for this query.
         // eslint-disable-next-line
         console.log(crearUsuario);
         console.log(crearUsuario.id);
         if(crearUsuario!=null){
             window.alert('registro exitoso')
             this.$router.push('/login')
         }
       },
        });
      }
  }
}
</script>

<style>

</style>