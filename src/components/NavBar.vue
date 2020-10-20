<template>
  <mdb-navbar color="#013D40" position="top" style="background-color:#013D40">
    <a href="/index_teachers">
      <mdb-navbar-brand>
        <img src="@/assets/Inicio.png" height="30" alt=""> <b style="color:#FFFFFF">PanitApp</b>
      </mdb-navbar-brand>
    </a>  
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/cursos_teachers"><b style="color:#FFFFFF">Cursos</b></mdb-nav-item>
        <mdb-nav-item href="/trabajos_teachers"><b style="color:#FFFFFF">Trabajos</b></mdb-nav-item>
        <mdb-nav-item href="/notas_teachers"><b style="color:#FFFFFF">Notas</b></mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" slot="toggle" waves-fixed><b><mdb-icon icon="tools" /></b></mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item><b>Calendario</b></mdb-dropdown-item>
            <mdb-dropdown-item><b>Chats</b></mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbDropdown, mdbDropdownMenu, mdbDropdownToggle, mdbDropdownItem, mdbIcon} from 'mdbvue';
  export default {
    name: 'NavbarTeachers',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownMenu,
      mdbDropdownToggle,
      mdbDropdownItem,
      mdbIcon
    }
  }
</script>