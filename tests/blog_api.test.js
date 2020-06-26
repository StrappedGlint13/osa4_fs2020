const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [ 
    { title: "React patterns", author: "Michael Chan", url: "https://reactpatterns.com/", likes: 7, __v: 0 }, 
    { title: "Go To Statement Considered Harmful", author: "Edsger W. Dijkstra", url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html", likes: 5, __v: 0 }, 
]

beforeEach(async () => {
    await Blog.deleteMany({})
  
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
  
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
  })

describe('GET tests', () => {
    test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('there are two blogs', async () => {
        const response = await api.get('/api/blogs')
    
        expect(response.body).toHaveLength(initialBlogs.length)
    })

    test('id is defined right', async () => {
        const response = await api.get('/api/blogs')

        expect(response.body[0].id).toBeDefined()
      })

})

describe('POST tests', () => {
    test('a valid blog can be added', async () => {
        const newBlog = {
          title: 'Kuudes aisti',
          author: 'Bruce Willis',
          url: 'kuudesaisti.fi',
          likes: 99999999,
        }
      
        await api
          .post('/api/blogs')
          .send(newBlog)
          .expect(200)
          .expect('Content-Type', /application\/json/)
      
        const response = await api.get('/api/blogs')
      
        const contents = response.body.map(r => r.title)
      
        expect(response.body).toHaveLength(initialBlogs.length + 1)
        
        expect(contents).toContain(
            'Kuudes aisti'
        )
      })

      test('when likes are undefined', async () => {
        const newBlog = {
          title: 'Kuudes aisti',
          author: 'Bruce Willis',
          url: 'kuudesaisti.fi',
        }
      
        await api
          .post('/api/blogs')
          .send(newBlog)
          .expect(200)
          .expect('Content-Type', /application\/json/)
      
        const response = await api.get('/api/blogs')
      
        const likes_zero = response.body.find(r => r.title === 'Kuudes aisti')
      
        expect(likes_zero.likes).toBe(0)
      })


      test('when title or url are undefined', async () => {
        const newBlog = {
          title: 'Kuudes aisti',
          author: 'Bruce Willis',
        }
      
        await api
          .post('/api/blogs')
          .send(newBlog)
          .expect(400)
      })

})

afterAll(() => {
    mongoose.connection.close()
    })

