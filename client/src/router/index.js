import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Calories from '../views/Calories';
import Excercise from '../views/Excercises';
import Report from '../views/Report';
import UserPage from '../views/User';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/calories', name: 'calories', component: Calories },
  { path: '/excercises', name: 'excercises', component: Excercise },
  {path: '/report', name: 'report', component: Report},
  {path: '/user', name:'userpage', component: UserPage},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
