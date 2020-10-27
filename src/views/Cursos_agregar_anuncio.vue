<template>
    <div style="overflow-x: hidden;">
      <header>
          <NavBarTeachers/>
      </header>
      <mdb-edge-header color="teal darken-2">
        <div class="home-page-background"></div>
      </mdb-edge-header>
      <mdb-container class="free-bird" style="margin-bottom:250px">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h2 class="pb-4"><strong style="color:#037E85">Agregar anuncio</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../../src/assets/Panitapp.png" class="img-fluid"/>
                </mdb-col>
                <mdb-col md="9">
                  <p class="pb-4">Crea un anuncio que veran todos los estudiantes del curso</p>
                  <mdb-row class="d-flex flex-row justify-content-center">
                    <mdb-col md="9">
                      <form>
                        <div>
                          <div class="input-group" style="margin-bottom:20px">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon">
                                <i class="fas fa-microphone prefix"></i>
                              </span>
                            </div>
                            <input v-model="newNombreC" type="text" class="form-control" placeholder="Descripción" aria-label="Username" aria-describedby="basic-addon">
                          </div>
                        </div>
    <ApolloQuery
      :query="gql => gql`
        query  ($newNombreC: String!) {
          getUsuarioByUsername(nombre_usuario: $newNombreC){
           id
           rol{
             nombre
           }
          }
        }
      `"
      :variables="{ newNombreC }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured: {{error}}</div>

        <!-- Result -->
        <!-- No result -->
        <div v-if="data.getUsuarioByUsername[0]!=null"></div>
        <button @click="agregar(data.getUsuarioByUsername[0])" style="color:#03A2AB;" class="border m-2 rounded" type="button" target="_blank"><mdb-icon icon="plus-circle" class="mr-2"/>Agregar</button>
        <button @click.prevent="volver" style="color:#03A2AB;" class="border m-2 rounded"><mdb-icon icon="undo" class="mr-2"/>Volver</button>
      </template>
    </ApolloQuery>

                        
                        
                      </form>
                    </mdb-col>
                  </mdb-row>   
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-container>
        <Footer/>
      </mdb-container>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBarTeachers from "@/components/NavBar.vue";
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbEdgeHeader, mdbCardBody, animateOnScroll } from 'mdbvue';
import gql from 'graphql-tag';
const registrar= gql`
    mutation ($idEstudiante: ID!, $idCurso: ID!){
      crearEstudianteCurso(id_estudiante:$idEstudiante, id_curso:$idCurso)
    }

    `
export default {
  name: 'HomePage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbEdgeHeader,
    mdbCardBody,
    NavBarTeachers,
    Footer
  },
  data (){
    return{
      newNombreC:'',
      idCurso: this.$route.params.id
    }
  },
  methods:{
    volver: function (){
      this.$router.push({ name: "Cursover", params: { id: this.idCurso } })
  },
  agregar: function(data){
    if(data!=null){
    if(data.rol.nombre=="Profesor"){
      window.alert("no puede añadir un profesor a un curso")
    }else{
          this.$apollo.mutate({
       mutation: registrar,
       variables: {
         idCurso:this.idCurso,
         idEstudiante:data.id
       },
       update: (cache, { data: { crearEstudianteCurso } }) => {
         // Read the data from our cache for this query.
         // eslint-disable-next-line
         console.log(crearEstudianteCurso);
         window.alert("usuario agregado exitosamente")
       },
        });
      }
      }else{
        window.alert('no ingreso un usuario registrado')
      }
  }
  },
  directives: {
    animateOnScroll
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}

.home-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('../../src/assets/Cursos.jpg') center;
  background-size: cover;
}

</style>
