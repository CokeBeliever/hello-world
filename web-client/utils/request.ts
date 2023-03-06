/**
 * HTTP 请求方式 Enum
 */
export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * HTTP 请求
 * @param url HTTP URL
 * @param method HTTP 请求方式
 */
export default function request(
  pathname: string,
  method: HttpMethodEnum = HttpMethodEnum.GET,
  init?: RequestInit
) {
  const headers = { ...init?.headers, 'Content-Type': 'application/json' }
  const body = init?.body ? JSON.stringify(init.body) : ''

  return fetch('/apis' + pathname, {
    ...init,
    method,
    headers,
    body,
  }).then((res) => {
    if (res.ok) return res.json()
    else return Promise.reject()
  })
}
