import { IMiddleware } from 'koa-router'

/**
 * 响应的毫秒数
 */
const fn: IMiddleware = async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}

export default fn
