// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router';
import { ZBJConfig } from './config/env';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';
// Import F7 Styles
/* eslint-disable no-unused-vars */
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';

import './config/rem'; // 设置 font-size  750px
import FastClick from 'fastclick'; // 设置移动端300ms延迟


const router = new VueRouter({
  routes,
  mode: ZBJConfig.routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  }
});
Vue.use(Framework7Vue, Framework7);
Vue.config.productionTip = false; // 在应用启动时，可以通过设置Vue.config.productionTip = false来关闭生产模式下给出的提示

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  router,
  components: {
    app: App
  }
});
