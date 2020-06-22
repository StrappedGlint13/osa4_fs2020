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
        let most_likes = {'likes':-1}

        blogs.forEach(blog => 
            {
                if(blog.likes > most_likes.likes) {
                    most_likes = blog
                } 
            })

        return most_likes
    }

}
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }