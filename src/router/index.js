import { createRouter, createWebHashHistory } from 'vue-router';
import frontBoard from '../views/FrontBoard.vue';

const routes = [
  {
    path: '/',
    name: 'frontBoard',
    component: frontBoard,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/Contact.vue'),
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/Shop.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/Checkout.vue'),
      },
      {
        path: 'check/:order',
        name: 'check',
        component: () => import('../views/Check.vue'),
      },
      {
        path: 'final/:order',
        name: 'final',
        component: () => import('../views/Final.vue'),
      },

    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/backend/Login.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/backend/DashBoard.vue'),
    children: [
      {
        path: 'newProduct',
        name: 'newProduct',
        component: () => import('../views/backend/NewProduct.vue'),
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import('../views/backend/Admin.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/backend/Order.vue'),
      },
      {
        path: 'editOrder/:id',
        name: 'editOrder',
        component: () => import('../views/backend/EditOrder.vue'),
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/backend/Coupons.vue'),
      },
      {
        path: 'newCoupon',
        name: 'newCoupon',
        component: () => import('../views/backend/NewCoupon.vue'),
      },
      {
        path: 'articles',
        name: 'articles',
        component: () => import('../views/backend/Articles.vue'),
      },
      {
        path: 'newArticle',
        name: 'newArticle',
        component: () => import('../views/backend/NewArticle.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass: 'bg-primary',
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
