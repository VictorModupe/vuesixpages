import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Features from '@/views/Features.vue';
import Commissions from '@/views/Commissions.vue';
import AiChat from '@/views/AiChat.vue';
import Faq from '@/views/Faq.vue';
import Privacy from '@/views/Privacy.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView, // Ensure HomeView.vue exists
    },
    {
      path: '/features',
      name: 'Features',
      component: Features, // Ensure Features.vue exists
    },
    {
      path: '/commissions',
      name: 'Commissions',
      component: Commissions, // Ensure Commissions.vue exists
    },
    {
      path: '/about',
      name: 'Ai',
      component: AiChat, // Ensure AiChat.vue exists
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq, // Ensure Faq.vue exists
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy, // Ensure Privacy.vue exists
    }
  ]
});


export default router
