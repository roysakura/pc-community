// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App'
import routes from './router'
import axios from 'axios'
import promise from 'es6-promise';
import store from './store/'
import 'babel-polyfill'
// import $ from 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Font from 'font-awesome-webpack';
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
import { Carousel,CarouselItem} from 'element-ui'
import VueLazyload from 'vue-lazyload'
promise.polyfill();
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(VueRouter);
Vue.use(Toast)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.png'),
  attempt: 1,
  listenEvents: ['scroll']
})
const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  base: '/cms/',
  scorllBehavior: () => ({
    y: 0
  }),
  routes
});
// import 'bootstrap/dist/js/bootstrap.min'
Vue.config.productionTip = false
// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.localStorage.getItem('ptoken')) {
  store.dispatch('setToken',window.localStorage.getItem('ptoken'));
}
// http request 拦截器
axios.interceptors.request.use(
  config => {
    //配置token
    if (window.localStorage.getItem('ptoken')) {
      config.headers.Authorization = ` JWT ${window.localStorage.getItem('ptoken')}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.dispatch('clearToken');
          store.dispatch('clearUserId');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)
  });
axios.defaults.baseURL = 'http://m.ciyigou.com:80';
// axios.defaults.baseURL = 'http://dev.ectrend.com:80';
// axios.defaults.baseURL = 'http://192.168.0.200:8080';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
//横向进度加载
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
  NProgress.start();
  if(to.path === "/news" || to.path.indexOf('/newslist/')!==-1){
    store.dispatch("showNewsTab",true);
  }else{
    store.dispatch("showNewsTab",false);
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (window.localStorage.getItem('ptoken')) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
      NProgress.done();
    }
  } else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});

//将axios对象挂载到Vue原型上去
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
