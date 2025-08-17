import { createRouter, createWebHistory } from 'vue-router'
import NotionDataViewer from '@/views/NotionParentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NotionDataViewer,
    },
  ],
})

export default router
