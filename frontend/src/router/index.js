import { createRouter, createWebHistory } from 'vue-router'
import NotionDataViewer from '@/views/NotionParentView.vue'
import NotionChildView from '@/views/NotionChildView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NotionDataViewer,
    },
    {
      path: '/block/:block_id',
      name: 'block',
      component: NotionChildView,
    },
  ],
})

export default router
