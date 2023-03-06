import { Sequelize } from 'sequelize'
import * as configs from '@/configs'

const sequelize = new Sequelize(configs.mysql)

sequelize
  .sync({ force: true })
  .then(() => sequelize.authenticate())
  .then(() => {
    console.log('成功建立数据库连接.')
  })
  .catch((error) => {
    console.error('无法连接到数据库:', error)
  })

export default sequelize
