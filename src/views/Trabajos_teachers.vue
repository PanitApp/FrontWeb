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
              <h2 class="pb-4"><strong style="color:#037E85">Mis trabajos</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../../src/assets/Trabajos.png" class="img-fluid"/>
                </mdb-col>
                <mdb-col md="9">
                  <p class="pb-4">Bienvenido a la sección de Trabajos de PanitApp<br>
                    [ Aquí podrás crear y ver los trabajos asignados a los estudiantes en cada curso ]</p>
                  <mdb-row class="d-flex flex-row justify-content-center">
                    <mdb-col md="6">
                      <a href="" class="nav-link border m-2 font-weight-bold rounded" target="_blank"><mdb-icon icon="book" class="mr-2"/>Ver trabajos</a>
                    </mdb-col>  
                    <mdb-col md="6"> 
                      <a href="" class="nav-link border m-2 font-weight-bold rounded" target="_blank"><mdb-icon icon="plus-circle" class="mr-2"/>Crear trabajo</a>
                    </mdb-col>
                  </mdb-row>   
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-container>
        <h2 class="text-center mt-5 font-weight-bold" style="color:#037E85">Trabajos</h2>
        <mdb-col md="10" class="mx-auto text-center text-muted mb-5">
          <p>Listado de trabajos asignados</p>
        </mdb-col>
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeInRight">
              <mdb-card-body>
                <mdb-card-title><mdb-icon icon="book" class="green-text" /><strong> Primera entrega</strong></mdb-card-title>
                <mdb-card-text>Programación II - Primer trabajo de la asignatura</mdb-card-text>
                <router-link to="/advanced" class="float-right"><mdb-btn style="background-color:#013D40">Más</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <Footer/>
      </mdb-container>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBarTeachers from "@/components/NavBar.vue";
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll} from 'mdbvue';

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
  background: url('../../src/assets/Trabajos.jpg') center;
  background-size: cover;
}

</style>
