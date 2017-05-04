import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/components/Community'
import Profile from '@/components/Profile'
import Users from '@/components/Users'
import Threads from '@/components/Threads'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Community',
      component: Community
    },
    {
   		path: '/nav/profile',
   		name: 'Profile',
   		component: Profile
    },
    {
   		path: '/nav/users',
   		name: 'Users',
   		component: Users
    },
    {
   		path: '/nav/threads',
   		name: 'Threads',
   		component: Threads
    }
  ]
})
