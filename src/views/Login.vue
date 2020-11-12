<template>
  <mdb-row id="view">
    <mdb-col sm="4">
    </mdb-col>  
        <mdb-col sm="4" style="margin-top: 100px;">
          <mdb-card narrow  style="margin-bottom: 500px;">
            <mdb-view hover cascade>
              <a href="#!">
                <mdb-card-image :src="require('@/assets/Inicio.png')" alt="Card image cap" style="margin-left: 30px; margin-right: 30px;"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <form class="text-center border border-light p-5">
                <p class="h4 text-center mb-4" style="color:#03A2AB;">Iniciar sesión</p>
                <mdb-input v-model="authDetails.username" label="Nombre de usuario"  type="text"/>
                <mdb-input v-model="authDetails.password" label="Contraseña"  type="password"/>
                <div class="text-center">
                
                      <button class="btn" v-on:click="login()" style="background-color:#03A2AB; color:#FFFFFF; margin-bottom: 30px" type="button">Iniciar</button>


                  <p>¿No tienes cuenta?</p>
                  <p><a href="/register" style="color:#03A2AB;"> Registrate aquí</a></p>

                </div>
              </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
    </mdb-row>  
</template>

<script>
  import {  mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbInput } from 'mdbvue';
  import gql from 'graphql-tag'
  export default {
    name: 'Register',
    components: {
      mdbInput,

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
      autenticado :  this.$store.getters.authStatus,
      idstore: this.$store.getters.user.id,
      authDetails: {
        username: '',
        password: ''
      },
      date: new Date().toJSON()
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('login',this.authDetails)
      let rol=this.$store.getters.user.rol
      if(rol=="Profesor"){
        this.$router.push('/index_teachers')
      }else{
        this.$router.push('/index_students')
      }
    }
  }
  }
</script>

<style scoped>
  #view{
    background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  }
</style>