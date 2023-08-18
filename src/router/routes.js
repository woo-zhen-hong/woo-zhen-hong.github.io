
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Home.vue'), meta: { title: 'notificationer' } },
      { name: 'list', path: 'list', component: () => import('pages/List.vue'), meta: { title: 'notificationer' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
