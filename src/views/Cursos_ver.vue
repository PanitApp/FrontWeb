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
              <h2 class="pb-4"><strong style="color:#037E85">Nombre del curso</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../../src/assets/Panitapp.png" class="img-fluid"/>
                </mdb-col>
                <mdb-col md="9">
                  <p class="pb-4">Descripción</p>
                  <mdb-row class="d-flex flex-row justify-content-center">
                    <mdb-col md="9">
                        <p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                                                fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis
                                                piros</p>
                      <button @click.prevent="volver" style="color:#03A2AB;" class="border m-2 rounded"><mdb-icon icon="undo" class="mr-2"/>Volver</button>
                      <button @click.prevent="irAgregarEStudiantes" style="color:#03A2AB;" class="border m-2 rounded"><mdb-icon icon="users" class="mr-2"/>Agregar estudiantes</button>
                    </mdb-col>
                  </mdb-row>   
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-container>
        <h2 class="text-center mt-5 font-weight-bold" style="color:#037E85">Estudiantes</h2>
        <mdb-col md="10" class="mx-auto text-center text-muted mb-5">
          <p>Listado de estudiantes inscritos</p>
          <mdb-datatable-2 v-model="data" />
        </mdb-col>
        
        <Footer/>
      </mdb-container>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBarTeachers from "@/components/NavBar.vue";
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbEdgeHeader, mdbCardBody, animateOnScroll, mdbDatatable2} from 'mdbvue';

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
      this.$router.push('/cursos_agregar_estudiante');
    },
  },
  data() {
    return {
      data: {
        columns: [
            {
              label: 'ID',
              field: 'id',
              sort: true
            },
            {
              label: 'NOMBRE',
              field: 'name',
              sort: true
            }
          ],
          rows: [
            {
              id: '1',
              name: 'Tiger Nixon',
            },
            {
              id: '2',
              name: 'Garrett Winters',
            }
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
