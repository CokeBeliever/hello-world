import request, { HttpMethodEnum } from '@/utils/request'

/**
 * 登陆
 */
export function postSecurityLogin(body) {
  return request('/security/login', HttpMethodEnum.POST, { body })
}
