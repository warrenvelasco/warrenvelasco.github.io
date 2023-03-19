import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: "Portfolio | Home"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: {
      title: "Portfolio | About"
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/views/skills/index.vue'),
    meta: {
      title: "Portfolio | Skills"
    }
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('@/views/works/index.vue'),
    meta: {
      title: "Portfolio | Works"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/contact/index.vue'),
    meta: {
      title: "Portfolio | Contact"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if(title) {
    document.title = title;
  }
  next();
});

export default router
