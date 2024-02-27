const { gql } = require("apollo-server-express");

const typeDefs =gql`
type Auth{
    token: ID
    user: User
}

type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    friends: [User]
    favorites: [Favorite]
}

type Favorite {
    _id: ID
    songName: String!
    artistName: String!
    songLink: String!
    albumArt: String!
}

type Blog {
    _id: ID
    blogText: String!
    createdAt: String
    blogAuthor: String!
    comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Query {
users : [User]!
user(userId: ID!): Profile
me: Profile
blogs(user: String): [Blog]
blog (blogId: ID!): Blog
myBlogs: [Blog]
}

type Profile {
    id: ID!
    username: String!
}

type Mutation {
addUser(username: String!, email:String!, password: String!): Auth
login(username: String!, password: String!): Auth
addFavorite(songName: String!, artistName: String!, songLink: String!, albumArt: String!): Favorite
addBlog(blogText: String!, blogAuthor: String!): Blog
addComment(blogId: ID!, commentText: String!, commentAuthor: String!): Blog
removeUser: User
removeBlog(blogId: ID!): Blog
removeComment(blogId: ID!, commentId: ID!): Blog
removeFavorite(favoriteId: ID!): User
}
`
module.exports = typeDefs;