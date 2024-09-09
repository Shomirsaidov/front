import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '../views/FeedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FeedView
  },
  {
    path: '/recipients/:id',
    name: 'application',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ApplicationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
