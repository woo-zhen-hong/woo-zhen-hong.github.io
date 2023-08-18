import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://192.168.99.156:3333/' // 亞灣6號機（亞灣左機）
  // baseURL: 'http://10.10.203.17:3333/' // 亞灣8號機（亞灣右機）
  // baseURL: 'http://192.168.1.101:3333/'
  // baseURL: 'http://192.168.1.13:3333/'
  // baseURL: 'http://192.168.1.236:3333/' // 燕巢冷藏加熱機1號
  baseURL: 'http://localhost:3333/'
  // baseURL: 'http://10.45.99.95:3333/' // 中軟7號機
})

// export const axiosLine = axios.create({
//   baseURL: lineURL
// })

// axiosLine.defaults.headers.common.Authorization = 'Bearer ' + '4K+xPGqBDneRQXqJFjDSzsB0AWcr1Ph5sgTPD5S5JsHVbRwLjJE9Sz8u6stNIcGKN6k5xKFl3WDfaQlkiErgTTga3inqOrNnzdKfDLWYpSNdOSybkgPxwjyZNooVev6eI0uc/IKDkc1eki/DdHTb2AdB04t89/1O/w1cDnyilFU='
// Vue.prototype.$api = api
// Vue.prototype.$axiosController = axiosController
// Vue.prototype.axiosLine = axiosLine
//
// export default ({ app }) => {
//   app.axios = axios
//   app.axiosController = axiosController
// }
export { axios, api }
