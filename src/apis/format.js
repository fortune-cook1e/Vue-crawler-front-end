import request from '@/utils/request'

export function format (data) {
  return request({
    url: '/format',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
