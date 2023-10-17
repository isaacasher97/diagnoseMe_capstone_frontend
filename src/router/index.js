import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DiagnoseMeView from '../views/DiagnoseMeView.vue'
import DiagnosisBlogView from '../views/DiagnosisBlogView.vue'
import AddDiagnosisView from '../views/AddDiagnosisView.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/diagnoseme',
    name: 'diagnoseme',
    component: DiagnoseMeView
  },
  {
    path: '/diagnosisblog',
    name: 'diagnosisblog',
    component: DiagnosisBlogView
  },
  {
    path: '/adddiagnosis',
    name: 'adddiagnosis',
    component: AddDiagnosisView
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
