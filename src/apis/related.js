import request from '@/utils/request'

export function related (data) {
  return request({
    method: 'post',
    url: '/related',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
