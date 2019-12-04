import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
      props: true
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () => import(/* webpackChunkName: "agenda" */ '../views/Agenda.vue'),
      props: true
    },
    {
      path: '/cancelar',
      name: 'cancelar',
      component: () => import(/* webpackChunkName: "cancelar" */ '../views/Cancelar.vue'),
      props: true
    },

    {
      path: '/configuracao',
      name: 'configuracao',
      component: () => import(/* webpackChunkName: "configuracao" */ '../views/Configuracao.vue'),
      props: true
    },
    {
      path: '/consulta',
      name: 'consulta',
      component: () => import(/* webpackChunkName: "consulta" */ '../views/Consulta.vue'),
      props: true
    },
    
    {
      path: '/marcar',
      name: 'marcar',
      component: () => import(/* webpackChunkName: "marcar" */ '../views/Marcar.vue'),
      props: true
    }

  ]
})

/*{
      path: '/contato',
      name: 'contato',*/
     // component: () => import(/* webpackChunkName: "contato" */ '../views/Contato.vue'),
     /* props: true
    },*/