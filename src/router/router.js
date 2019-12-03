
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
        import("../Home.vue"),
      default: true,
      props: true
    }, {
      path: '/:slug',
      component: () =>
        import("../Recipe.vue"),
      props: true
    }
  ]
})
