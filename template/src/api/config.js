import axios from 'axios'
import qs from 'qs'
import router from '../router'
const BASE = ''

// 请求拦截
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  // if (response.data.code === 403) {
  //   router.replace({path: '/login'})
  // }
  return response
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export { axios, qs, BASE }