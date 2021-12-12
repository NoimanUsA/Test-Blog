const routes = [
  {
    path: '/',
    component: () => import('pages/Notes.vue'),
  },
  {
    path: '/write-note',
    name: 'write-note',
    component: () => import('pages/WriteNote.vue'),
    children: [{
      path: 'new',
      name: 'write-new-note',
      component: () => import('pages/WriteNote.vue'),
    },
    {
      path: '/:id',
      name: 'rewrite-note',
      component: () => import('pages/WriteNote.vue'),
    }],
  },
  {
    path: '/note/:id',
    name: 'note',
    components: () => import('pages/Note.vue'),
  },
];

export default routes;
