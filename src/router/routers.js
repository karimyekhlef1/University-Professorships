const routes = [
    // {
    //     path: '/' ,
    //     name: 'Home',
    //     component: () => import('@/pages/HomePage.vue'),
    //   },
      {
        path: '/',
        name: 'Enseignants',
        component: () => import('../pages/EnseignantsPage.vue'),
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
      // {
      //   path: '/help',
      //   name: 'help',
      //   component: () => import('../pages/HelpPage.vue')
      // }
  ]
  
  export default routes