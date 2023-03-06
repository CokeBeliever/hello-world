import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './routers'

const app = new Koa()

// resolve request body into ctx.body
app.use(bodyParser())
// router
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(9527, () => {
  console.log('HelloWorld 服务器已启动')
})
