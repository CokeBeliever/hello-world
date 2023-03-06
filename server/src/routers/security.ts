import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import { jsonResponseBody } from '@/utils'
import * as models from '@/models'
import * as keys from '@/keys'

const router = new Router()
/** 最大寿命 */
const MAX_AGE = 60 * 60 * 24

// 登陆
router.post('/login', async (ctx) => {
  const { username, password }: any = ctx.request.body

  if (!username || !password)
    return (ctx.body = jsonResponseBody.success('请输入用户名和密码'))

  const user = await models.User.findOne({
    where: { username, password, isDeleted: false },
  })

  if (user) {
    if (user.getDataValue('isEnabled')) {
      ctx.body = jsonResponseBody.success('登录成功', {
        token: jwt.sign(
          {
            ...user.get(),
            exp: Math.floor(Date.now() / 1000) + MAX_AGE,
          },
          keys.PRIVATE_KEY,
          { algorithm: 'RS256' }
        ),
        user,
      })
    } else {
      ctx.body = jsonResponseBody.success('账号被禁用，请联系客服')
    }
  } else {
    ctx.body = jsonResponseBody.success('用户名或密码错误')
  }
})

export default router
