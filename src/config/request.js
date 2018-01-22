import axios from 'axios'
import { Notification } from 'element-ui'

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['X-Request-With'] = 'XMLHttpRequest'

let baseUrl = ''
export default async(url, method, data = {}, forbid) => {
  url = baseUrl + url
  let response
  if (sessionStorage.getItem('token')) {
    axios.defaults.params = {
      api_token: sessionStorage.getItem('token')
    }
  }
  if (method == 'get') {
    response = await axios.get(url)
  } else if (method == 'post') {
    response = await axios.post(url, data)
  }

  if (response.data.status === 'success') {
    if (!forbid) {
      Notification.success({
        message: response.data.message,
        duration: 1500
      })
    }
    if (response.data) {
      if (response.data.data) {
        if (response.data.data.token) {
          sessionStorage.setItem('token', response.data.data.token)
        }
      }
    }
    return Promise.resolve(response.data.data)
  } else if (response.data.status === 'error') {
    Notification.error({
      message: response.data.message,
      duration: 1500
    })
    return Promise.reject(response.data.message)
  }
}