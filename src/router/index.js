import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Dashboard from '@/views/DashboardView.vue'

const routes = [
  {
    meta: {
      title: 'Select style'
    },
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    meta: {
      title: 'Tables'
    },
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Calendar'
    },
    path: '/calendar',
    name: 'calendar',
    component: () => import('@/views/CalendarView.vue')
  },
  {
    meta: {
      title: 'Chat'
    },
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/ChatView.vue')
  },
  {
    meta: {
      title: 'Calendar'
    },
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    meta: {
      title: 'setup'
    },
    path: '/setUp',
    name: 'setUp',
    component: () => import('@/views/SetUpView.vue')
  },
  {
    meta: {
      title: 'Notes'
    },
    path: '/notes',
    name: 'notes',
    component: () => import('@/views/NotesView.vue')
  },
  {
    meta: {
      title: 'Flash cards'
    },
    path: '/flashCards',
    name: 'flashCards',
    component: () => import('@/views/FlashCardsView.vue')
  },
  
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
