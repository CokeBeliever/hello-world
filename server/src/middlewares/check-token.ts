import { IMiddleware } from 'koa-router'
import jwt from 'jsonwebtoken'
import { jsonResponseBody } from '@/utils'
import * as keys from '@/keys'

/** 路线白名单 Map */
const ROUTES_WHILE_MAP = new Map<string, string>([
  ['/apis/security/login', 'POST'],
])

/**
 * 检查 token
 */
const fn: IMiddleware = async (ctx, next) => {
  const token = ctx.headers.token
  const { url, method } = ctx.request

  if (
    ROUTES_WHILE_MAP.has(url) &&
    ROUTES_WHILE_MAP.get(url) === method.toUpperCase()
  ) {
    await next()
  } else {
    if (typeof token === 'string') {
      try {
        jwt.verify(token, keys.PUBLIC_KEY)
        await next()
      } catch (e) {
        ctx.body = jsonResponseBody.unauthorized('令牌已过期，请重新登录')
      }
    } else {
      ctx.body = jsonResponseBody.unauthorized('请先登录')
    }
  }
}

export default fn
