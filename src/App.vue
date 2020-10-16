<template>

  <div id="app">
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import navBar from "@/components/navBar.vue";
export default {
  name: "App",
  components: {
    navBar,
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
