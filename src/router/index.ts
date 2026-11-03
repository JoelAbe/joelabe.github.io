import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue'),
  },
  {
    path: '/projects/:projectId?',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
  },
  // Old section URLs, kept working because they've been shared in emails
  // (e.g. /game-projects/robodrive).
  {
    path: '/game-projects/:projectId?',
    redirect: (to) => ({ name: 'Projects', params: to.params }),
  },
  {
    path: '/other-projects/:projectId?',
    redirect: (to) => ({ name: 'Projects', params: to.params }),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
