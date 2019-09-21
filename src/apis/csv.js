import request from '@/utils/request'

export function csv (data) {
  return request({
    url: '/csv',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
