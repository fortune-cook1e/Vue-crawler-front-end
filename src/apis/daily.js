import request from '@/utils/request'

export function daily (data) {
  return request({
    url: '/daily',
    method: 'post',
    data
  })
}
