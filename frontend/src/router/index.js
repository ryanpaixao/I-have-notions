import { createRouter, createWebHistory } from 'vue-router'
import NotionDataViewer from '@/views/NotionParentView.vue'
import NotionChildView from '@/views/NotionChildView.vue'

import GlossaryView from '@/views/GlossaryView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import TypeParentView from '@/views/TypeParentView.vue';
import TypeChildView from '@/views/TypeChildView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NotionDataViewer,
    },
    {
      path: '/glossary',
      name: 'glossary',
      component: GlossaryView,
    },
    {
      path: '/type',
      name: 'typeParent',
      component: TypeParentView,
    },
    {
      path: '/block/:block_id',
      name: 'block',
      component: NotionChildView,
    },
    {
      path: '/page/:page_id',
      name: 'page',
      component: TypeChildView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
  ],
})

export default router
