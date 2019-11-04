import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Calories from '../views/Calories';
import Friends from '../views/Friends';
import Excercise from '../views/Excercises'


Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/calories', name: 'calories', component: Calories },
  { path: '/friends', name: 'friends', component: Friends },
  { path: '/excercises', name: 'excercises', component: Excercise },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
