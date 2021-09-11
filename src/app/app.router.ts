import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/index.vue';
import About from './components/about.vue';
import postRoutes from '@/post/post.routes';
/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about-us',
    // redirect: '/about',
    // redirect: { name: 'about' },
    redirect: to => {
      console.log(to);
      return '/about';
    },
  },
  ...postRoutes,
];
/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 导航守卫
 */
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    console.log('导航守卫');
  }

  next();
  // console.log('导航守卫');
  // console.log('to:', to);
  // console.log('from:', from);
  // // next();
  // if (to.name === 'postIndex') {
  //   next('/');
  // } else {
  //   next();
  // }
});

export default router;
