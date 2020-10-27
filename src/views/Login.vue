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
                <mdb-input v-model="newUsername" label="Nombre de usuario"  type="text"/>
                <mdb-input v-model="newContrasena" label="Contraseña"  type="password"/>
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
                      <div v-else-if="data.getUsuarioByUsername[0]!=null" class="result apollo">

                      </div>

                      <!-- No result -->
                      <div v-else class="no-result apollo"></div>
                      <button class="btn" v-on:click="login(data)" style="background-color:#03A2AB; color:#FFFFFF; margin-bottom: 30px" type="button">Iniciar</button>

                    </template>
                  </ApolloQuery>
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
      autenticado :  this.$store.getters.returnLogState,
      idstore: this.$store.getters.returnUser.id,
      date: new Date().toJSON()
    }
  },
  methods: {
    login(data) {
      
        if(data.getUsuarioByUsername[0]!=null ){
          if(data.getUsuarioByUsername[0].contrasena==this.newContrasena){
            this.id=data.getUsuarioByUsername[0].id;
            this.autenticado=true;
            window.alert("inicio de sesion exitoso")
            var usuario={
              id: data.getUsuarioByUsername[0].id,
              name: data.getUsuarioByUsername[0].nombre,
              username: data.getUsuarioByUsername[0].nombre_usuario,
              email: data.getUsuarioByUsername[0].email,
              Rol: data.getUsuarioByUsername[0].rol.nombre,
            }
            this.$store.dispatch('storeUser',usuario)
            this.$store.dispatch('changeLogState')
            if(usuario.Rol=="Profesor"){
              this.$router.push('/index_teachers')
            }
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
  #view{
    background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  }
</style>