const { Users, Blogs, Favorites} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async ()=> {
            return Users.find();
        },
        user: async (parent, {username})=> {
            return Users.findOne({username: username});
        },
        me: async (parent, args, context) => {
            if(context.user){
                return Users.findOne({_id: context.user._id});
            }
            throw AuthenticationError;
        },
        blogs: async (parent, {user})=> {
            const operator = user ? {user} : {};
            return Blogs.find(operator).sort({createdAt: -1});
        },
        blog: async (parent, {blogId}) => {
            return Blogs.findOne({_id:blogId});
        },
        myBlogs: async (parent, args, context) =>{
            if(context.user){
                return Blogs.find(context.user.username).sort({createdAt: -1});
            }
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password})=> {
            const user = await Users.create({username, email, password});
            const token = signToken(user);
            return { token, user};
        },
        login: async (parent, {username, password})=> {
            let getUser = await Users.findOne({username});
            if(!getUser){
                getUser = await Users.findOne({email: username});
                if(!getUser){
                    throw AuthenticationError
                }
            }
            const passwordCheck = await getUser.checkPassword(password);
            if(!passwordCheck){
                throw AuthenticationError
            }
            const token= signToken(getUser);
            return {token, getUser};
        },
        addFavorite: async (parent , {songName, artistName, songLink, albumArt }, context)=> {
            const favorite = await Favorites.create({ songName, artistName, songLink, albumArt});
            await Users.findOneAndUpdate({_id: context.user._id}, {$addToSet: {favorites: favorite._id}})
        },
        addBlog: async (parent, {blogText, blogAuthor})=> {
            const newBlog = await Blogs.create({ blogText, blogAuthor});
            return newBlog;
        },
        addComment: async (parent, {blogId, commentText,commentAuthor })=>{
            return Blogs.findOneAndUpdate({_id: blogId},{$addToSet: {comments: {commentText, commentAuthor}}},{new: true});
        },
        removeUser: async (parent, args, context) => {
            if(context.user){
                return Users.findOneAndDelete({_id: context.user._id});
            }
            throw AuthenticationError;
        },
        removeBlog: async (parent, {blogId}, context) => {
                return Blogs.findOneAndDelete({_id: blogId ,blogAuthor: context.user.username});
        },
        removeComment: async (parent, {blogId, commentId}, context) => {
            return  Blogs.findOneAndUpdate({_id: blogId}, {$pull: {comments: {_id: commentId, commentAuthor: context.user.username} } }, {new: true} );
        },
        removeFavorite: async (parent, { favoriteId})=> {
            return Favorites.findOneAndDelete({_id: favoriteId });
        }
    }
}

module.exports = resolvers;