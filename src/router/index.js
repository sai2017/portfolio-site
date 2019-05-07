/* eslint-disable import/first */
import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import works from '@/components/works'
import contact from '@/components/contact'

Vue.use(Router)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }

  ]
})
