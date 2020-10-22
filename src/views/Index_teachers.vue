<template>
	<mdb-container>
    <header>
      <NavBarTeachers/>
    </header>
    <main>
      <mdb-row style="margin-top: 150px; margin-bottom: 280px">
        <mdb-col sm="4">
          <mdb-card narrow>
            <mdb-view hover cascade>
              <a href="/cursos_teachers">
                <mdb-card-image :src="require('@/assets/Panitapp.png')" alt="Card image cap" style="margin-left: 30px; margin-right: 30px;"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <h5 class="pb-2 pt-1" style="color:#013D40"><mdb-icon icon="chalkboard-teacher"/> Mis cursos</h5>
              <mdb-card-title style="color:#037E85"><strong>Cursos</strong></mdb-card-title>
              <mdb-card-text>Desde está opción podras ingresar a los cursos que están a tu cargo o crear uno nuevo</mdb-card-text>
                <mdb-btn v-on:click="irCursos()" style="color:#FFFFFF"><mdb-icon icon="chalkboard" class="mr-1"/>Cursos</mdb-btn>

            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card narrow>
            <mdb-view hover cascade>
              <a href="/trabajos_teachers">
                <mdb-card-image :src="require('@/assets/Trabajos.png')" alt="Card image cap" style="margin-left: 30px; margin-right: 30px;"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <h5 class="pb-2 pt-1" style="color:#013D40"><mdb-icon icon="book"/> Trabajos propuestos</h5>
              <mdb-card-title style="color:#037E85"><strong>Trabajos</strong></mdb-card-title>
              <mdb-card-text>Crea y revisa los trabajos que has asigando a los estudiantes de tus cursos</mdb-card-text>
              <a href="/trabajos_teachers">
                <mdb-btn style="color:#FFFFFF"><mdb-icon icon="list" class="mr-1"/>Trabajos</mdb-btn>
              </a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col sm="4">
          <mdb-card narrow>
            <mdb-view hover cascade>
              <a href="/calendario_teachers">
                <mdb-card-image :src="require('@/assets/Calendario.png')" alt="Card image cap" style="margin-left: 30px; margin-right: 30px;"></mdb-card-image>
                <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
              </a>
            </mdb-view>
            <mdb-card-body cascade>
              <h5 class="pb-2 pt-1" style="color:#013D40"><mdb-icon icon="calendar-alt"/> Mi Calendario</h5>
              <mdb-card-title style="color:#037E85"><strong>Calendario</strong></mdb-card-title>
              <mdb-card-text>Revisa las clases programadas y la fecha limite de los trabajos asignados.</mdb-card-text>
              <a href="/calendario_teachers">
                <mdb-btn style="color:#FFFFFF"><mdb-icon icon="calendar-check" class="mr-1"/>Calendario</mdb-btn>
              </a>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </main>
    <Footer/>
	</mdb-container>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import NavBarTeachers from "@/components/NavBar.vue";
	import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbView, mdbMask, mdbIcon} from 'mdbvue';
	export default {
		name: 'CardProPage',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn,
			mdbView,
			mdbMask,
      mdbIcon,
      NavBarTeachers,
      Footer
    },
    methods:{
      irCursos: function(){
        this.$router.push('/cursos_teachers')
      }
    },
    data(){
    return{
      idstore: this.$store.state.user.id,
      nombreusuario: this.$store.state.user.username
    }
  }
	}
</script>