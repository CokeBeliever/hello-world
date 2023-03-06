import { DataTypes } from 'sequelize'
import { sequelize } from '@/utils'

export default sequelize.define(
  'User',
  {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      comment: '用户标识',
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '登录账号',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '用户密码',
    },
    realName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '用户姓名',
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '手机号',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '邮箱',
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: '等级',
    },
    createdId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: 'system',
      comment: '创建人标识',
    },
    createdTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: '创建时间',
    },
    updatedId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: 'system',
      comment: '修改人标识',
    },
    updatedTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: '修改时间',
    },
    deletedId: {
      type: DataTypes.UUID,
      comment: '删除人标识',
    },
    deletedTime: {
      type: DataTypes.DATE,
      comment: '删除时间',
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      comment: '是否删除',
    },
    isEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      comment: '是否启用',
    },
  },
  {
    tableName: 'user',
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
)
