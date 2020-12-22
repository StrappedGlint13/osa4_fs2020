const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const Comment = require('../models/comment')


blogRouter.get('/', async (request, response) => {
  const blogs = await Blog    
  .find({})
  .populate('user', { username: 1, name: 1, id: 1 })
  .populate('comments', { comment: 1})
  response.json(blogs.map(blog => blog.toJSON()))
  })

blogRouter.post('/', async (request, response, next) => {
    const body = request.body
    const token = request.token
      if (token === false) {
    return response.status(401).end()
  }

    const decodedToken = jwt.verify(token, process.env.SECRET)  
    if (!token || !decodedToken.id) {    
      return response.status(401).json({ error: 'token missing or invalid' })  
    }

    const user = await User.findById(decodedToken.id)
    
    const new_blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        user: user._id,
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

      user.blogs = user.blogs.concat(savedBlog._id)  
      await user.save()    

      response.json(savedBlog.toJSON())  

      } catch(exception) {    
        next(exception)  
      }
      
  })

  blogRouter.post('/:id/comments', async (request, response, next) => {
    const body = request.body
    const id = request.params.id
    const blog = await Blog.findById(id)
    console.log(JSON.stringify(blog))
    const new_comment = new Comment({
        comment: body.comment,
        blog: blog._id,
    })

    try {
      if (new_comment.comment === undefined) {
        return response.status(400).end()
      }
      const savedComment = await new_comment.save()
      console.log("this comment:" + savedComment)
      blog.comments = blog.comments.concat(savedComment._id)  
      await blog.save()    
      response.json(savedComment.toJSON())  
      } catch(exception) {    
        next(exception)  
      }
      
  })

  blogRouter.delete('/:id', async (request, response, next) => {
    try {

    
    const blog = await Blog.findById(request.params.id)

    const token = request.token
      if (token === false) {
    return response.status(401).end()
  }

    const decodedToken = jwt.verify(token, process.env.SECRET)  
    if (!token || !decodedToken.id) {    
      return response.status(401).json({ error: 'token missing or invalid' })  
    }

    const user = await User.findById(decodedToken.id)

    const userid = user.id

    if (blog.user.toString() === userid.toString()) {
      await Blog
      .findByIdAndRemove(request.params.id)
    
      response.json({ info:'blog deleted'})
    } else {
      response.status(400).json({ error: 'user does not exists'})
    }
  } catch(exception) {
    next(exception) 
  }
  })

  blogRouter.put('/:id', async (request, response, next) => {
    const body = request.body

    const blog = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
    }
    try {  

  
  const updatedBlog = await Blog
    .findByIdAndUpdate(request.params.id, blog, {new:true})
    .populate('User', { username: 1, name: 1})
    .populate('Comment', { comment: 1})
    response.json(updatedBlog.toJSON())
    
  } catch(exception) {    
    next(exception)  
  }

  })



module.exports = blogRouter