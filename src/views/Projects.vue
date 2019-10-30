<template>
  <div class="projects">
    <h1 class="subheading grey--text">My uncompleted Projects</h1>
<!--Show only my projects using th EXPANSION PANEL component-->
<v-expansion-panels>
    <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
 <!--In v-expansion-panel-content we loop thru the panels.-->
      <v-expansion-panel-content class="grey--text">
        <div class="font-weight-bold">Due by {{ project.due}} Status {{ project.status}}</div>
        <div>{{ project.content}}</div>
      </v-expansion-panel-content>
    </v-expansion-panel>
</v-expansion-panels>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {title: 'Design a new website', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Brett Whitmore', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Brett Whitmore', due: '10th Jan 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', tlabel: 'Project Title', plabel: 'Project assigned to', dlabel: 'Date due for completion', slabel: 'Status', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        // Only select an array element if Brett Whitmore AND not complete
        return project.person === 'Brett Whitmore' && project.status != 'complete'
      })
    }
  }
}
</script>