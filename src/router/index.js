import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/components/Settings'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Settings',
      component: Settings
    },
    {
   		path: '/nav/users',
   		name: 'Users',
   		component: Users 
    }
  ]
})
