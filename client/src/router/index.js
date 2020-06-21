import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import main from '@/components/main'
import projects from '@/components/projects'
import update from '@/components/update'
import signin from '@/components/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
        path: '/update',
        name: 'update',
        component: update
    }
  ]
})
