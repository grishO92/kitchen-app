import { createRouter, createWebHistory } from 'vue-router';

import Catalog from '../views/Catalog.vue';
import About from '../views/About.vue';
import Create from '../views/Create.vue';
import Details from '../views/Details.vue';
import Edit from '../views/Edit.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import firebase from 'firebase';

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: { requiresAuth: true },
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  requiresAuth && !isAuthenticated ? next('/login') : next();
});

export default router;
