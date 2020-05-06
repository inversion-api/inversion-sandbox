import Vue from 'vue'
import VueRouter from 'vue-router'
import RootLayout from '../views/RootLayout.vue'

Vue.use(VueRouter);

const routes = [
  {
    // path: '/',
    // name: 'root',
    // component: RootLayout,
    // children: [
    //   {
        props: true,
        path: '/query_builder/:tableName',
        name: 'QueryBuilder',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/QueryBuilder.vue')
      }
    // ]
  // },
];

const router = new VueRouter({
  routes
});

export default router
