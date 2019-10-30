<template>
<!--Create a DIV with a class of DASHBOARD
    So for styling this screen, we can use this class-->
  <div class="dashboard">
   <h1 class="subheading grey--text">Dashboard</h1>
       <!--MY-5 - Give a margin to the container from top & from bottom-->
<v-container class="my-5">
  <!--Create a row of buttons (use v-layout row) with a margin from the bottom of 3-->
  <v-layout row class="mb-3">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
    <!--Create a small button with an icon on the left. 
    On click, run "sortBy" using the array field name as a sort parameter(function defined below)-->
    <v-btn small text color="blue white--text" @click="brettSort('title')" v-on="on">
      <v-icon left small>mdi-folder</v-icon>
      <!--Add small text to the button in lower case-->
      <span class="caption text-lowercase">By project title</span>
    </v-btn>
     </template>
     <span>Sorts the project list by the project title</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <!--Create a small button with an icon on the left
        On click, run "sortBy" using a sort parameter(function defined below)-->
    <v-btn class="ml-3" small text color="blue white--text" @click="brettSort('person')" v-on="on">
      <v-icon left small>mdi-account</v-icon>
      <!--Add small text to the button in lower case-->
      <span class="caption text-lowercase">By person assigned</span>
    </v-btn>
    </template>
    <span>Sorts the project list by the person a project is assigned to</span>
    </v-tooltip>
  </v-layout>

  <!--Create a white background. PA-3 pads some space around this white card--> 
  <!--    to read the array we must bind the data to the key property by :KEY & 
          use the array field TITLE as the key-->
  <v-card flat v-for="brettsproj in projects " :key="brettsproj.title">
  
      <!--CREATE A ROW and give a dynamic class based on the status of each variable project. 
      To do this we must 1st bind the class with :CLASS
      To pickup each status value (a dynamic variable) we use an ES6 template string by using back ticks ``
      and a dollar sign (pa 3 is just padding) like so     :class="`pa3 brettsproj ${brettsproj.status}`"-->
    <v-layout row wrap :class="`pa-3 brettsproj ${brettsproj.status}`" >

      <!--Create details of a project-->
      <!--TITLE-->
    <v-flex xs12 md6>
      <!--create a DIV using CAPTION (small text) which will sit in the box where data is to be entered-->
      <div class="caption grey--text">{{brettsproj.tlabel}}</div>
      <!--load some data into this flex-->
      <div>{{brettsproj.title}}</div>
    </v-flex>
      <!--NAME-->
    <v-flex xs6 sm4 md2>
      <div class="caption grey--text">{{brettsproj.plabel}}</div>
      <!--load some data into this flex-->
      <div>{{brettsproj.person}}</div>
    </v-flex>
        <!--DUE DATE-->
    <v-flex xs6 sm4 md2>
      <div class="caption grey--text">{{brettsproj.dlabel}}</div>
      <!--load some data into this flex-->
      <div>{{brettsproj.due}}</div>
    </v-flex>
          <!--STATUS-->
    <v-flex xs2 sm4 md2>
      <!--The CHIP bubble is wrapped in this DIV. We add CLASS="RIGHT" to position the CHIP on the RHS-->
      <div class="right">
        <!--build a bubble around the status field (with small writing)
        and bind a CLASS for styling (in <style></style>) with white text & 
        small writing using "caption" with a margin above/below of 2-->
        <v-chip small :class="`${brettsproj.status} black--text my-2 caption`">{{ brettsproj.status }}</v-chip>
      </div>
    </v-flex>
    </v-layout>
  <v-divider></v-divider>

  </v-card>

</v-container>
 </div>
</template>

<script>
export default { 
  data() {
    // return an object - an array property called PROJECTS where each element is an object
    return {
      projects: [
        {title: 'Design a new website', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Brett Whitmore', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods:{
    // Define brettSort, using mySort as the sort arguement (Title or Person)passed to this method. 
    brettSort(mySort){
      // SORT is a JS system word (function).It compares every consecutive pair of objects (array elements) in an array. 
      // a,b are 2 data elements. SORT determines which of these 2 elements should come first. So we will
      // get a return of -1 or +1   -1 (need to change the order) +1 (dont need to change the order)
      // ie: return -1 if false, or +1 if true
      this.projects.sort((a,b) => a[mySort] < b[mySort] ? -1 :1)
    }
  }
}
</script>
<style>
/*.brettsproj picks up the class "brettsproj"
  .complete   picks up the value complete & gives colour green etc
  border-left is the border that will display with relevant colour
*/
.brettsproj.complete{
  border-left: 4px solid green;
}
.brettsproj.ongoing{
  border-left: 4px solid orange;
}
.brettsproj.overdue{
  border-left: 4px solid red;
}
/*style the v-chip class (used to wrap the status value in a bubble) */
.v-chip.complete{
  color: green;
}
.v-chip_content.ongoing{
 color: orange;
}
.v-chip.overdue{
  color: red;
}
</style>