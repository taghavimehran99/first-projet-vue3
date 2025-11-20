const routes = [
  {
    path: '/',
    component: () => import('layouts/LayoutMaster.vue'),
    children: [
      { path: '', component: () => import('../pages/HomeMain.vue') },
      { path: 'HomeDeatal', component: () => import('../pages/HomeDetail.vue') },
    ],
  },
]

export default routes
