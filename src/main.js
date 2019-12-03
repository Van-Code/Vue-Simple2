
import Vue from 'vue/dist/vue.esm.js';
import router from './router/router';
import Shell from './Shell'
import vuetify from './plugins/vuetify'

export default new Vue({
  router,
  vuetify,
  el: '#app',
  render (h) {
    return h(Shell)
  }
});


