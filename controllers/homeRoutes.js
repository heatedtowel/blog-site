const router = require('express').Router();
const Blog = require('../models/Blog');

const sanatize = (value) => {
  return JSON.parse(JSON.stringify(value));
};


router.get('/', async (req, res) => {
  try {
    
    const blogData = await Blog.findAll();
    const blogs = sanatize(blogData)
    res.render('all', {blogs});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

module.exports = router;