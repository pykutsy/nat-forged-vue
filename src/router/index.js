import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: () => import('@/views/AboutView.vue') },
  { path: '/coaching/nutrition', component: () => import('@/views/NutritionCoachingView.vue') },
  { path: '/coaching/fitness', component: () => import('@/views/FitnessCoachingView.vue') },
  { path: '/coaching/combined', component: () => import('@/views/CombinedCoachingView.vue') },
  { path: '/apply', component: () => import('@/views/ApplyView.vue') },
  { path: '/privacy', component: () => import('@/views/PrivacyView.vue') },
  { path: '/terms', component: () => import('@/views/TermsView.vue') },
  { path: '/disclaimer', component: () => import('@/views/DisclaimerView.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
