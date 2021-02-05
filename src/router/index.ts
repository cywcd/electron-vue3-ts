//router.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Hello from '@/components/HelloWorld.vue'
 
export default createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: '/',
          component: Home
      },
      {
        path: '/Hello',
        component: Hello
      },
      {
          path: '/About',
          component: About
      }
  ],
});
