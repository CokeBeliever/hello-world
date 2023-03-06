import { Options } from 'sequelize'

const config: Options = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'hello_world',
  timezone: '+08:00',
  pool: {
    min: 0,
    max: 10,
  },
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  logging: false,
}

export default config
