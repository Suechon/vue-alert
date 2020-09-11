import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mock from './mock/mock.js';
import store from './store/store'
/* eslint-disable*/
Vue.config.productionTip = false

export let client = axios.create({
  baseURL: "",
})
Vue.prototype.$axios = axios

//mock起動の設定
client = axios.create({
  baseURL: "",
})
mock.run(client)

Vue.use(VueAxios, axios);

// interceptors
axios.interceptors.request.use(request => {
  store_setAlert({
    action: false,
    message: null,
    detail: null,
  }).then(function (change) {
  }).catch(function (error) {
  });

  return request
})


new Vue({
  vuetify,
  mock,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


function store_setAlert({ action: action, message: message, detail: detail }) {
  return new Promise(function (resolve, reject) {
    store.dispatch("alert/setAlert", {
      action: action,
      message: message,
      detail: detail,
    });
    resolve();
  })
}