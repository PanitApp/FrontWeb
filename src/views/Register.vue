<template>
  <!-- Material form login -->
  <section>
  <mdb-container>
      <form>
    <p class="h4 text-center mb-4 ">Iniciar sesion</p>
    <div class="grey-text  ">
      <mdb-input label="correo"  type="email"/>
      <mdb-input label="contraseña"  type="password"/>
    </div>
    <div class="text-center">
      <button class="btn" style="background-color:#05DFEB;" type="submit">Iniciar</button>
    </div>
  </form>
  </mdb-container>
  </section>
  <!-- Material form login -->
</template>

<script>
  import { mdbInput,mdbContainer } from 'mdbvue';
  export default {
    name: 'Register',
    components: {
      mdbInput,
      mdbContainer
    },
  }
</script>

<style scoped>
    
</style>