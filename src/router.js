import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // The path is '/' for the Dashboard.vue component.
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      // The path is '/projects' for the Projects.vue component
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      // The path is '/projects' for the Projects.vue component
      path: '/team',
      name: 'team',
      component: Team
    }
  ]
})
