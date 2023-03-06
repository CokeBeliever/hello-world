import Router from 'koa-router'
import * as models from '@/models'
import { jsonResponseBody } from '@/utils'

const router = new Router()

// 用户注册
router.post('/', async (ctx) => {
  const { username, password, realName, mobile, email }: any = ctx.request.body

  const user = await models.User.findOne({
    where: { username, isDeleted: false },
  })

  if (user) {
    ctx.body = jsonResponseBody.failed('用户名已存在')
  } else {
    await models.User.create({
      username,
      password,
      realName,
      mobile,
      email,
      createdId: 'system',
    })
    ctx.body = jsonResponseBody.success('注册成功')
  }
})

export default router
