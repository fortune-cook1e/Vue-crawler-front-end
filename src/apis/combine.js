import request from '@/utils/request'

export function combine (data) {
  return request({
    url: '/combine',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
