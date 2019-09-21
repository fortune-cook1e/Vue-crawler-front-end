import request from '@/utils/request'

export function convert (data) {
  return request({
    url: '/convert',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
