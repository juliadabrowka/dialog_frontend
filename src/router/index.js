import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Active from '../views/Active.vue'
import About from '../views/About.vue'
import Charity from '../views/Charity.vue'
import Serie from '../views/Serie.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Active
  },
  {
    path: '/active/',
    name: 'Active',
    component: Home
  },
  {
    path: '/about-us/',
    name: 'About',
    component: About
  },
  {
    path: '/charity/',
    name: 'Charity',
    component: Charity
  },
  {
    path: '/serie/:slug/',
    name: 'Serie',
    component: Serie
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
