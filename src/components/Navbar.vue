<template>
<nav>
    <!--Create a toolbar. And include FLAT to remove shadow & APP to keep the bar at the top of the page-->
    <!-- <v-toolbar flat app> -->
      <v-app-bar flat app class="indigo white--text">
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
        
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">The</span>
          <span> Toolbar</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--START of code for drop down menu-->
        <!--v-menu Note: offset-y forces the drop list to position under the button (Y direction), not over it-->
        <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="grey" v-on="on">
            <v-icon left>mdi-chevron-down-circle</v-icon>
            <span class="text-lowercase">Drop Menu</span>
          </v-btn>
          </template>
          <!-- The drop down list-->
          <v-list>
            <!--Read the array "links" & using the text field link.text, attach it to its route link.route-->
        <v-list-item
          v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title class="indigo--text">{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
        </v-menu>
        <!--END   of code for drop down menu-->
        <v-btn text color="grey">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn> 
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="primary">

          <v-layout column align-centre>
            <!--use a FLEX container ( with a margin TOP 5) to hold the AVATAR-->
            <v-flex class="mt-5">
              <v-avatar size="70">
              <img src="/avatar-1.png" alt="">
              </v-avatar>
              <p class="white--text subheading mt-1">Brett Whitmore</p>
              </v-flex>
              <!--use a v-flex container to display the POPUP-->
              <v-flex class="mt-4 mb-3">
                <Popup />
              </v-flex>
              <!--end of POPUP display code-->
          </v-layout>

        <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    </nav>
</template>
<script>
// import Popup
import Popup from './Popup'
export default {
  // register Popup
  components: { Popup},
    data() {
return {
    drawer: false,
    // create an array "["
    links: [
        // Each link is an object. Each object has 3 properties (the 3rd is the route if clicked)
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
        { icon: 'mdi-account-multiple', text: 'Team', route: '/team'},
    ]



        }
    }   
}
</script>
<style>    
</style>