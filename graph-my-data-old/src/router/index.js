import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome.vue'
import DataView from '../components/DataView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/dataview',
      name: 'DataView',
      component: DataView
    }
  ]
})
