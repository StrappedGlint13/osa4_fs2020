const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs.map(blog => blog.toJSON()))
      })
  })
  
blogRouter.post('/', async (request, response, next) => {
    const body = new Blog(request.body)

    const new_blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    })

    try {
      if (new_blog.likes === undefined || new_blog.likes === null) {
        new_blog.likes = 0
      }

      if (new_blog.title === undefined || new_blog.url == undefined) {
        return response.status(400).end()
      }
      const savedBlog = await new_blog.save()    
      response.json(savedBlog.toJSON())  
      } catch(exception) {    
        next(exception)  
      }
      
  })

module.exports = blogRouter