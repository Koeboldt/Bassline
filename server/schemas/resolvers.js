const { Users, Blogs} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async ()=> {
            return Users.find();
        },
        user: async (parent, {userId})=> {
            return Users.findOne({_id:userId});
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
                return Blogs.find(context.user).sort({createdAt: -1});
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
            const getUser= await Users.findOne({username});
            if(!getUser){
                throw AuthenticationError;
            }
            const passwordCheck= await user.checkPassword(password);
            if(!passwordCheck){
                throw AuthenticationError
            }
            const token= signToken(getUser);
            return {token, user};
        },
    }
}

module.exports = resolvers;