const routes = [
  {
    path: '/',
    redirect: '/notes',
  },
  {
    path: '/notes',
    name: 'notes',
    component: () => import('pages/Notes.vue'),
  },
  {
    path: '/write-note',
    name: 'write-note',
    component: () => import('pages/WriteNote.vue'),
  },
  {
    path: '/note/:id',
    name: 'note',
    props: true,
    component: () => import('pages/Note.vue'),
  },
  {
    path: '/rewrite-note/:id',
    name: 'rewrite-note',
    component: () => import('pages/RewriteNote.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/notes',
  }];

export default routes;
