<template>
  <!-- Material form login -->
  
    <div class="container"> 
        <form>
        <p class="h4 text-center mb-4 ">Iniciar sesion</p>
        <div class="grey-text">
        <mdb-input label="correo"  type="email"/>
        <mdb-input label="contraseña"  type="password"/>
        </div>
        <div class="text-center">
        <button class="btn" style="background-color:#05DFEB;" type="submit">Iniciar</button>
        </div>
    </form>
    </div>

  <!-- Material form login -->
</template>

<script>
  import { mdbInput } from 'mdbvue';
  import { navBar} from '@/components/navBar.vue';
  export default {
    name: 'Register',
    components: {
      mdbInput
    },
  }
</script>

<style scoped>
    #container{
        
    }
</style>