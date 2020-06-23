const blog = require("../models/blog")

const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    var totalLikes = blogs.reduce((sum, blog) => 
    sum + blog.likes, 0)

    return totalLikes
}

const favoriteBlog = (blogs) => {
    if (typeof blogs === 'undefined' || blogs.length === 0) {
         return 'The array is not defined or is empty'
    }
    
    if (blogs.length === 1) {
        return blogs[0]
    } else {
        let most_likes = blogs[0]

        blogs.forEach(blog => 
            {
                if(blog.likes > most_likes.likes) {
                    most_likes = blog
                } 
            })

        return most_likes
    }

}

const mostBlogs = (blogs) => {
    if (blogs.length < 0) {
        return
    }

    let listed = false

    const authors = []

        blogs.forEach(blog => 
            {
                for(var i = 0; i < authors.length; i++) {    
                        if (blog.author === authors[i].name) {      
                            listed = true
                            var index = i             
                        } else {
                            listed = false   
                        }
                }

                if (listed) {
                    authors[index].blogs = authors[index].blogs + 1
                } else {
                    authors.push({name: blog.author, blogs: 1})
                }               
                               
            })
    

    console.log(authors)
    let most_blogs = authors[1]

    authors.forEach(author => 
        {
            if(author.blogs > most_blogs.blogs) {
                most_blogs = author
            } 
        })

    return most_blogs
}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
  }