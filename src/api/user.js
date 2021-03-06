import request from '@/utils/request'
import qs from 'qs'

export const login = params => {
  return request.post(`/user/login`, qs.stringify(params))
}

export const getUserInfo = params => {
  return request.get(`/user/login`, params)
}
