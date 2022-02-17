// [Favorite Button 만들기]
// 1. Favorite Model 만들기

const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const favoriteSchema = mongoose.Schema({ // favorite 스키마 만들기
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User' // User.js 안의 정보들을 가져올 수 있음. (name, email, password 등등 ..)
    }, 
        movieId: {
        type: String
    }, 
    movieTitle: {
        type: String
    }, 
    movieImage: {
        type: String
    }, 
    movieRunTime: {
        type: String
    }

}, { timestamps: true })

const Favorite = mongoose.model('User', userSchema);

module.exports = { Favorite }