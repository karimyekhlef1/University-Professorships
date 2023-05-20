import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from '@/views/Layout/Base.vue';
import NavBar from '@/components/NavBar.vue'
// import EnseignantsPage from '../pages/EnseignantsPage'

Vue.use(VueRouter);

export const routes = [
  {
    path: '',
    component: Base,
    meta: { requiresAuth: true },
    children: [
      // {
      //   path: '/' ,
      //   name: 'Home',
      //   component: () => import('@/pages/HomePage.vue'),
      // },
      {
        path: '/',
        name: 'Enseignants',
        component: () => import('@/pages/EnseignantsPage.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/ContactPage.vue')
      } ,  
      {
        path: '/help',
        name: 'help',
        component: () => import('../pages/HelpPage.vue')
      },
      {
        path: '/enseignants/:id',
        name: 'Enseignant',
        component: () => import('../pages/Enseignant.vue')
      }
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.Base,
  routes,
});

export default router;
