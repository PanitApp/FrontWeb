<template>
    <div style="overflow-x: hidden;">
      <header>
          <NavBarTeachers/>
      </header>
      <mdb-edge-header color="teal darken-2">
        <div class="home-page-background"></div>
      </mdb-edge-header>
      <mdb-container class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2">
           
              
                
                  <ApolloQuery
      :query="gql => gql`
        query  ($idCurso: ID!) {
          getCursosCreadosById(id:$idCurso){
            id
            nombre
            descripcion
          }
        }
      `"
      :variables="{ idCurso }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured: {{error}}</div>

        <!-- Result -->
         <mdb-card-body v-else-if="data!=null">
<h2  class="pb-4"><strong style="color:#037E85" >{{data.getCursosCreadosById.nombre}}</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../../src/assets/Panitapp.png" class="img-fluid"/>
                </mdb-col>
          <mdb-col md="9"  >
            <p class="pb-4">Descripción</p>
                  <mdb-row class="d-flex flex-row justify-content-center">
                    <mdb-col md="9">
                        <p class="text-justify">{{data.getCursosCreadosById.descripcion}}</p>
                      <button @click.prevent="volver" style="color:#03A2AB;" class="border m-2 rounded"><mdb-icon icon="undo" class="mr-2"/>Volver</button>
                      <button @click.prevent="irAgregarEStudiantes" style="color:#03A2AB;" class="border m-2 rounded"><mdb-icon icon="users" class="mr-2"/>Agregar estudiantes</button>
                      <button @click.prevent="irAgregarAnuncios" style="color:#03A2AB;" class="border m-2 rounded"><mdb-icon icon="microphone" class="mr-2"/>Agregar anuncio</button>
                    </mdb-col>
                  </mdb-row>   
                </mdb-col>
        </mdb-row>
        </mdb-card-body>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
                  
              
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <ApolloQuery
      :query="gql => gql`
        query  ($idCurso: ID!) {
          getEstudiantesByCurso(id_curso:$idCurso){
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
      `"
      :variables="{ idCurso }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured: {{error}}</div>

        <!-- Result -->
         <div v-else-if="data!=null"  ></div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
      <mdb-container>
        <h2 class="text-center mt-5 font-weight-bold" style="color:#037E85">Estudiantes</h2>
        <mdb-col md="10" class="mx-auto text-center text-muted mb-5">
          <p>Listado de estudiantes inscritos</p>
          <mdb-datatable-2 v-model="data" :key="componentKey" />
        </mdb-col>
        <Footer/>
      </mdb-container>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBarTeachers from "@/components/NavBar.vue";
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbEdgeHeader, mdbCardBody, animateOnScroll, mdbDatatable2} from 'mdbvue';
import gql from 'graphql-tag';
 export const get_estudiantes = gql`
  query  ($idCurso: ID!) {
          getEstudiantesByCurso(id_curso:$idCurso){
            nombres
            email
          }
        }
 `;
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
    Footer,
    mdbDatatable2
  },
  directives: {
    animateOnScroll
  },
  methods :{
    volver: function (){
      this.$router.push('/cursos_teachers');
    },
    irAgregarEStudiantes: function (){
      this.$router.push({ name: "AgregarEst", params: { id: this.idCurso } })
    },
    irAgregarAnuncios: function (){
      this.$router.push({name: "AgregarAnuncio",params: { id: this.idCurso } })
    },
  },
  apollo: {
  // Advanced query with parameters
  // The 'variables' method is watched by vue
  estudiantes: {
    query: get_estudiantes,
    // Reactive parameters
    variables () {
      // Use vue reactive properties here
      return {
        idCurso: this.idCurso,
      }
    },
    update (data) {
      console.log(data)
      console.log(this.data.rows[0])
      this.data.rows=data.getEstudiantesByCurso
      console.log(this.data.rows[0])
      this.componentKey += 1;
      return data.getEstudiantesByCurso
    },
    // Optional result hook
    // Error handling
    error (error) {
      console.error('We\'ve got an error!', error)
    },
    // Loading state
    // loadingKey is the name of the data property
    // that will be incremented when the query is loading
    // and decremented when it no longer is.

  },
},
  data() {
    return {
      componentKey: 0,
      idCurso:this.$route.params.id,
      data: {

        columns: [
            {
              label: 'NOMBRES',
              field: 'nombres',
              sort: true
            },
            {
              label: 'CORREO',
              field: 'email',
              sort: true
            }
          ],
          rows: [

          ]
        }
      }
    }
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
