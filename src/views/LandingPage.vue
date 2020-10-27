<template>
    <div style="margin-top: -15px; overflow-x: hidden;">
      <mdb-edge-header color="teal darken-2">
        <div class="home-page-background"></div>
      </mdb-edge-header>
      <mdb-container class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h2 class="pb-4"><strong>PanitAPP</strong></h2>
              <mdb-row>
                <mdb-col md="3">
                  <img src="../../src/assets/Notas.png" class="img-fluid"/>
                </mdb-col>
                <mdb-col md="9">
                  <p class="pb-4">Bienvenido<br>
                  Acá encontrarás tu asistente de estudio</p>
                </mdb-col>
              </mdb-row>
              </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-container>
        <h2 class="text-center mt-5 font-weight-bold">¿Qué te gustaría hacer?</h2>
        <mdb-col md="10" class="mx-auto text-center text-muted mb-5">
         </mdb-col>
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeInLeft">
              <mdb-card-image src="https://www.flaticon.es/svg/static/icons/svg/438/438592.svg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="earlybirds" class="pink-text" /><strong> - Administra tus cursos</strong></mdb-card-title>
                <mdb-card-text>A.</mdb-card-text>
                <router-link to="/Login" class="float-right"><mdb-btn color="elegant">More</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeIn">
              <mdb-card-image src="https://www.clipartkey.com/mpngs/m/84-844507_imagenes-png-de-calificaciones.png" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="earlybirds" class="blue-text" /><strong> Mira los ultimos anuncios</strong></mdb-card-title>
                <mdb-card-text>R!</mdb-card-text>
                <router-link to="/Login" class="float-right"><mdb-btn color="elegant">More</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card class="animated fadeInRight">
              <mdb-card-image src="https://cdn.pixabay.com/photo/2020/02/18/11/02/rating-4859132_960_720.png" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="earlybirds" class="green-text" /><strong> Chatea con tu profesor</strong></mdb-card-title>
                <mdb-card-text>A.</mdb-card-text>
                <router-link to="/Login" class="float-right"><mdb-btn color="elegant">More</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeInLeft', delay: 400}">
              <mdb-card-image src="https://w7.pngwing.com/pngs/67/399/png-transparent-grading-in-education-school-report-card-student-college-school-label-text-class.png" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="earlybirds" class="pink-text" /><strong> Organiza tu tiempo</strong></mdb-card-title>
                <mdb-card-text>Rs.</mdb-card-text>
                <router-link to="/Login" class="float-right"><mdb-btn color="elegant">More</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeIn'}">
              <mdb-card-image src="https://img2.freepng.es/20180405/flw/kisspng-computer-icons-grading-in-education-test-school-quiz-5ac5bca96b12e0.1873379315229083294386.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="earlybirds" class="blue-text" /><strong> Gestiona tus trabajos</strong></mdb-card-title>
                <mdb-card-text>Ie!</mdb-card-text>
                <router-link to="/Login" class="float-right"><mdb-btn color="elegant">More</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-card v-animateOnScroll="{animation: 'fadeInRight', delay: 200}">
              <mdb-card-image src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg" alt="Card image cap"></mdb-card-image>
              <mdb-card-body>
                <mdb-card-title><mdb-icon fab icon="earlybirds" class="green-text" /><strong> Aprueba más facil tus cursos</strong></mdb-card-title>
                <mdb-card-text>Bsv.</mdb-card-text>
                <router-link to="/Login" class="float-right"><mdb-btn color="elegant">More</mdb-btn></router-link>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
             
      </mdb-container>
    </div>
</template>

<script>
import { mdbContainer, mdbCol, mdbRow, mdbIcon, mdbBtn, mdbEdgeHeader, mdbCard, mdbCardImage, mdbCardTitle, mdbCardText, mdbCardBody, animateOnScroll } from 'mdbvue';

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
    mdbCardImage, 
    mdbCardTitle,
    mdbCardText,
    mdbCardBody
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
