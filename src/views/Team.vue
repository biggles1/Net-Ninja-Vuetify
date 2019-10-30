<template>
<!--Create a DIV with a class of PROJECTS
    So for styling this screen, we can use this class-->
 <div class="team">
   <h1 class="subheading grey--text">Team</h1>
    
    <!--Give a margin to the comtainer from top & from bottom-->
<v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card text class="text-xs-center ma-3">

            <!--Place an image inside the <v-responsive> PT-4 is padding from the top of the card-->
            <v-responsive class="pt-4 pl-5">
              <!--The color GREY will actually give a grey border around the image-->
              <v-avatar size="70" class="grey lighten-2">
                <!--Place image here-Referenced in the array & stored in the PUBLIC direcdtory-->
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <!--content goes here in <v-card-text></v-card-text>-->
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <!--typically, buttons & links placed inside CARDS are wrapped in <v-card-actions></v-card-actions>-->
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
</v-container>
 </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        { name: 'Brett Whitmore', role: 'Front end developer', avatar: '/avatar-1.png' },
        { name: 'Greg Sier', role: 'Back end developer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
    }
  } 
}
</script>