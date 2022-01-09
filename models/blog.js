const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}


Blog.init({
  title: DataTypes.STRING,
}, {
  timestamps: false,
  freezeTableName: true,
  modelName: 'blog',
  underscored: true,
  sequelize
});

module.exports = Blog;