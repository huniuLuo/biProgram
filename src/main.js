// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import DataGraph from './views/data_show/data_show';
import Program from './views/program/program';
import Broadcast from './views/broadcast/broadcast';
import Topic from './views/topic/topic';
import show from './views/show_bage/show_bage';

import 'font-awesome/css/font-awesome.min.css';
// import Mock from './mock/mock';

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

// Mock.mockData();
Vue.use(VueRouter);// 安装路由功能
/* eslint-disable no-new */
// Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(ElementUI);

// 后端对比cookies判断是否登录，凡接口response的header带有x-auth-token的即未登录，跳转首页。
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next((response) => {
//     let messageHeader;
//     /* global IS_PRODUCTION:true */
//     if (IS_PRODUCTION) {
//       messageHeader = "X-Auth-Token";
//     } else {
//       messageHeader = "x-auth-token";
//     }
//     if (messageHeader in response.headers.map) {
//       router.push({path: '/login'});
//     }
//     return response
//   });
// });

let routes = [
  {
    path: '/',
    component: App,
    children: [
      // {path: '/data_show', component: Index, name: '内容数据概览', class: 'fa-line-chart'},
      {path: '/index', component: DataGraph, name: '内容数据概览', class: 'fa-line-chart'},
      {path: '/program', component: Program, name: '节目', class: 'fa-tv'},
      {path: '/broadcast', component: Broadcast, name: '直播', class: 'fa-video-camera'},
      {path: '/topic', component: Topic, name: '专题', class: 'fa-file-video-o'},
      {path: '/bage', component: show, name: '节目包', class: 'fa-tags'}
    ]
  }
];
let router = new VueRouter({
  // 'mode': 'history', 去掉URL的#号，需要配置服务器http://router.vuejs.org/zh-cn/essentials/history-mode.html
  'linkActiveClass': 'active',
  routes
});
new Vue({
  router
}).$mount('#app');

// export default app;
