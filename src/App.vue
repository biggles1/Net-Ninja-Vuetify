<template>
<!-- <v-app></v-app> must be the route component, with other components nested inside it!-->
  <v-app class="green lighten-4">
    <!--Nest the Navbar-->
    <Navbar/>
<!--<v-content></v-content> is typically when all content of the page is placed. 
    eg: The <nav></nav> would be above & the <footer></footer> below-->
    <!--By adding a margin class of mx-4  this will affect headings on all screens-->
    <v-content class="mx-4 mb-4">
       <!--Replace <HelloWorld/> with <router-view></router-view>-->
      <!--<HelloWorld/>-->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// Import Nav.vue - @               means the root directory of the source folder
//                  @/components    means "& then the components directory". 
import Navbar from '@/components/Navbar'
// Remove "import HelloWorld........":
//import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',
  // Register Navbar.vue  
  components: { Navbar },
  // Because HelloWorld not imported, we dont need to register it, so remove:
  //components: {
  //  HelloWorld,
  // },
  data () {
    return {
    //  
    }
  }
}
</script>
