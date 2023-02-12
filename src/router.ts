import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import InjectTest from './components/pages/InjectTest.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/inject_sample', name: 'inject_sample', component: InjectTest },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router