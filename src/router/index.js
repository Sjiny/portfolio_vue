import { createWebHistory, createRouter } from "vue-router"


const routes = [
    { path: '/', component: () => import('@/pages/Home'), name: 'HOME' },
    { path: '/about', component:() => import('@/pages/About'), name: 'ABOUT' },
    { path: '/projects', component:() => import('@/pages/Projects'), name: 'PROJECTS' },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;