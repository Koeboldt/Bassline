const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const favoriteSchema = new Schema(
    {
        songName: {
            type: String,
            required: true,
        },
        artistName:{
            type: String,
            required: true,
        },
        songLink:{
            type: String,
            required: true,
        },
        songImg:{
            type: String,
            required: true,
        }
    }
);
// todo add favorites, check if this works later.
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true, 
            match: [/[a-zA-Z0-9!]{7,23}/]
        },
        email: {
            type: String,
            unique: true,
            required: true,
            lowercase: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/]
        },
        password:{
            type: String,
            required: true,
            match: [/[a-zA-Z0-9!~@#$%^&]{7,23}/]
        },
         createdAt:{
            type: Date,
            default: Date.now
         },
        bio:{
            type: String,
        },
        favorites: [{
            favoriteSchema
            /*name: String,
            artistName: String, 
            link: String */
            }],
        friends:[{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
);
userSchema.pre('save', async function (next){
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 11);
    }
    next();
});

userSchema.methods.checkPassword = async function (password){
    return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;
