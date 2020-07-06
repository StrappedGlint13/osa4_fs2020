const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware')


blogRouter.get('/', async (request, response) => {
  const blogs = await Blog    
  .find({}).populate('user', { username: 1, name: 1, })
  
  response.json(blogs.map(blog => blog.toJSON()))
  })

blogRouter.post('/', async (request, response, next) => {
    const body = request.body


    const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    if (!token || !decodedToken.id) {    
      return response.status(401).json({ error: 'token missing or invalid' })  
    }

    const user = await User.findById(decodedToken.id)

    const new_blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id,
    })

      if (new_blog.likes === undefined || new_blog.likes === null) {
        new_blog.likes = 0
      }

      if (new_blog.title === undefined || new_blog.url == undefined) {
        return response.status(400).end()
      }
      const savedBlog = await new_blog.save()
      user.blogs = user.blogs.concat(savedBlog._id)  
      await user.save()    

      response.json(savedBlog.toJSON())  
      
  })

  blogRouter.delete('/:id', async (request, response, next) => {
    
    const blog = await Blog.findById(request.params.id)

    const token = middleware.tokenExtractor(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)  
    if (!token || !decodedToken.id) {    
      return response.status(401).json({ error: 'token missing or invalid' })  
    }

    const user = await User.findById(decodedToken.id)

    const userid = user.id

    if (blog.user.toString() === userid.toString())
      try {
      await Blog
      .findByIdAndRemove(request.params.id)
    
      response.json()
    } catch(exception) {    
      next(exception)  
    } else {
      response.status(400).json({ error: 'user does not exists'})
    }
    
  })

  blogRouter.put('/:id', async (request, response, next) => {
    const body = request.body
   
    try {
    await Blog
    .findByIdAndUpdate(request.params.id, body)
    response.json()
  } catch(exception) {    
    next(exception)  
  }

  })

module.exports = blogRouter