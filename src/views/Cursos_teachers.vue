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
            <mdb-card-body>
              <h2 class="pb-4"><strong style="color:#037E85">Mis Cursos</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../../src/assets/Panitapp.png" class="img-fluid"/>
                </mdb-col>
                <mdb-col md="9">
                  <p class="pb-4">Bienvenido a la sección de Cursos de PanitApp<br>
                    [ Aquí podrás crear y ver tus cursos ]</p>
                  <mdb-row class="d-flex flex-row justify-content-center">
                    <mdb-col md="6">
                      <a href="/cursos_teachers" class="nav-link border m-2 font-weight-bold rounded"><mdb-icon icon="chalkboard" class="mr-2"/>Ver cursos</a>
                    </mdb-col>  
                    <mdb-col md="6"> 

                      <a v-on:click="ircrearCursos()" class="nav-link border m-2 font-weight-bold rounded" target="_blank"><mdb-icon icon="plus-circle" class="mr-2"/>Crear curso</a>

                    </mdb-col>
                  </mdb-row>   
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-container>
        <h2 class="text-center mt-5 font-weight-bold" style="color:#037E85">Cursos</h2>
        <mdb-col md="10" class="mx-auto text-center text-muted mb-5">
          <p>Listado de cursos asociados</p>
        </mdb-col>
        
          <ApolloQuery
      :query="gql => gql`
        query  ($idProfe: ID!) {
          getCursosByProfesor(id_profesor:$idProfe){
            id
            nombre
            descripcion
          }
        }
      `"
      :variables="{ idProfe }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured: {{error}}</div>

        <!-- Result -->
        <mdb-row v-else-if="data!=null" >
          <mdb-col v-bind:key="n.id" v-for="n in data.getCursosByProfesor" md="4" class="mb-5">
            <mdb-card class="animated fadeInRight">
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="graduation-cap" class="green-text" /><strong> {{n.nombre}}</strong></mdb-card-title>
                <mdb-card-text>{{n.descripcion}}</mdb-card-text>
                <router-link to="/advanced" class="float-right"><mdb-btn style="background-color:#013D40">Más</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          </mdb-row>
        

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

          
        
        <h1>{{idProfe}}</h1>
        <Footer/>
      </mdb-container>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBarTeachers from "@/components/NavBar.vue";
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll } from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbContainer,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbBtn,
    mdbEdgeHeader,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    NavBarTeachers,
    Footer
  },
  data(){
    return{
      idProfe: this.$store.state.user.id,
      nombreusuario: this.$store.state.user.username,
      numeros:[1,2,3,4,5,6,7,8]
    }
  },
  methods:{
    ircrearCursos: function(){
      this.idProfe= this.$store.state.user.id;
        this.$router.push('/cursos_crear')
      },
  },
  directives: {
    animateOnScroll
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
