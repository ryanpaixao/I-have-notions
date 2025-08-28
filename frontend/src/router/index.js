import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue';
import ChildPageView from '@/views/ChildPageView.vue';

// Parent Views
import AsaParentView from '@/views/parent/AsaParentView.vue';
import GlossaryParentView from '@/views/parent/GlossaryParentView.vue';
import SubtypeParentView from '@/views/parent/SubtypeParentView.vue';
import TypeParentView from '@/views/parent/TypeParentView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
      path: '/page/:page_id',
      name: 'page',
      component: ChildPageView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
  ],
})

export default router
