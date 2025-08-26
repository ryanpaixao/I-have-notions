import { createRouter, createWebHistory } from 'vue-router'
import NotionDataViewer from '@/views/NotionParentView.vue'

import GlossaryParentView from '@/views/GlossaryParentView.vue';
import GlossaryChildView from '@/views/GlossaryChildView.vue';
import TypeParentView from '@/views/TypeParentView.vue';
import TypeChildView from '@/views/TypeChildView.vue';
import SubtypeParentView from '@/views/SubtypeParentView.vue';
import AsaParentView from '@/views/AsaParentView.vue';

import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NotionDataViewer,
    },
    {
      path: '/glossario',
      name: 'glossary',
      component: GlossaryParentView,
    },
    {
      path: '/tipos',
      name: 'typeParent',
      component: TypeParentView,
    },
    {
      path: '/subtipos',
      name: 'subtypeParent',
      component: SubtypeParentView,
    },
    {
      path: '/asa',
      name: 'asa',
      component: AsaParentView,
    },
    {
      path: '/block/:block_id',
      name: 'block',
      component: GlossaryChildView,
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
