<template>
  <mdb-row id="view">
    <mdb-col sm="4">
    </mdb-col>  
        <mdb-col sm="4" style="margin-top: 50px;">
          <mdb-card narrow style="margin-bottom: 420px;">
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image :src="require('@/assets/Inicio.png')" alt="Card image cap" style="margin-left: 30px; margin-right: 30px;"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <form class="text-center border border-light p-5">
                <p class="h4 text-center mb-4" style="color:#03A2AB;">Registro</p>
                <mdb-input v-model="newUsername" label="Usuario"  type="text"/>
                <mdb-input v-model="newEmail" label="Correo"  type="email"/>
                <mdb-input v-model="newNombre" label="first_name"  type="text"/>
                <mdb-input v-model="newpassword" label="Contraseña"  type="password"/>
                <select v-model="newRol" label="Seleccione el rol" class="browser-default custom-select">
                  <option value="Profesor">Profesor</option>
                  <option value="Estudiante">Estudiante</option>
                </select>

                <div class="text-center">
                  <mdb-btn style="margin-top: 20px; background-color:#03A2AB; color:#FFFFFF;" @click="registrarme()">Registrate</mdb-btn>
                </div>
              </form>
            </mdb-card-body>
            <p style="text-align: right; margin-right: 20px;"><a href="/login" style="color:#03A2AB;">Inicia sesión</a></p>
          </mdb-card>
        </mdb-col>
  </mdb-row>
</template>

<script>
import gql from 'graphql-tag';
import { mdbInput, mdbBtn, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody } from 'mdbvue';
const registrar= gql`
    mutation crearUsuario($usuario: RegisterInput){
      crearUsuario(usuario:$usuario){
        id
        username
        password
        first_name
        email
        rol
      }
    }
    ` 
export default {
    components: {
      mdbInput,
      mdbBtn,
      mdbRow, 
      mdbCol, 
      mdbCard, 
      mdbCardImage, 
      mdbCardBody
    },
  fragments: {
    usuario: gql`
      fragment usuario on Usuario {
        id
        username
        password
        first_name
        email
        rol
      }
    `
    },
  data () {
    return {
      id: 0,
      newMessage: '',
      newpassword: '',
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
          username: this.newUsername,
          password: this.newpassword,
          first_name: this.newNombre,
          email: this.newEmail,
          rol: this.newRol
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

<style scoped>
  #view{
    background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  }
</style>