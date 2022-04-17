import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL='http://123.207.32.32:8000'
// // axios.defaults.url='/home/data'
//
// axios.all([
//
//   axios({
//     // baseURL:'',
//     url:'/home/data',
//     type:'sell',
//     page:3,
//   }),
//   axios({
//   url:'http://123.207.32.32:8000/home/multidata'
//   })
// ]).then(res =>{
//   console.log(res)
// })

const ins=axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000

})

ins({
  url:'/home/data',
  type:'sell',
  page:3,
}).then(res=>{
  console.log(res)
})

