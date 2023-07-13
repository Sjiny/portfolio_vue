import { createWebHistory, createRouter } from "vue-router"


const routes = [
    { path: '/', component: () => import('@/pages/Home'), name: 'HOME', meta: {icon: 'mdi-home'}},
    { path: '/about', component:() => import('@/pages/About'), name: 'ABOUT', meta: {icon: 'mdi-account'}},
    { path: '/projects', component:() => import('@/pages/Projects'), name: 'PROJECTS', meta: {icon: 'mdi-note-multiple'}},
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;