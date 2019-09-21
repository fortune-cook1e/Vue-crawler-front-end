import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  console.log('err' + error)// for debug
  return Promise.reject(error)
})

export default service
