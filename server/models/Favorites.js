const {Schema, model} = require('mongoose');

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

const Favorite = model('favorite', favoriteSchema);

module.exports = Favorite;