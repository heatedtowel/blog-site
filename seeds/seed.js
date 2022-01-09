const sequelize = require('../config/connection');
const { Blog } = require('../models');

const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const blogs = await Blog.bulkCreate(blogData);

  process.exit(0);
};

seedDatabase();