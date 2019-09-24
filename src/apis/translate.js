import request from '@/utils/request'

export function translate (data) {
  return request({
    url: '/translate',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
