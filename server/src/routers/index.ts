import Router from 'koa-router'
import * as middlewares from '@/middlewares'
import securityRouter from './security'
import userRouter from './user'

const router = new Router()
router.use(middlewares.responseTime)
router.use(middlewares.checkToken)
router.use(
  '/apis/security',
  securityRouter.routes(),
  securityRouter.allowedMethods()
)
router.use('/apis/user', userRouter.routes(), userRouter.allowedMethods())

export default router
