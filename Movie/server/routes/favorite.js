// /server/
const { response } = require('express');
const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite')

// favorite API
router.post('/favoriteNumber', (req, res) => { 

    // /* post request, 주소, call back func : (require, response)*/
    // mongoDB에서 favorite 숫자를 가져오기
    Favorite.find({ "movieId": req.body.movieId }) // req를 통해서 front에서 보내준 movieId를 받음, 쿼리를 돌려서 model의 movieId와 프론트의 movieId의 일치정보를 DB에서 가져옴
        .exec((err, info) => {
            if(err) return res.status(400).send(err)

                // [1,2,3] 이런 형태로 info parameter에 들어가 있음.
                // 그다음에 프론트에 다시 숫자 정보를 보내주기
            res.status(200).json({ success:true,  favoriteNumber: info.length}) // 200은 성공, json 형태로, [1,2,3] 이면 length = 3
        })

})

router.post('/favorited', (req, res) => { 

    // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져오기
    // mongoDB에서 favorite 숫자를 가져오기
    Favorite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom})        
        .exec((err, info) => {
            if(err) return res.status(400).send(err)
            
            let result = false;
            if(info.length !== 0) {
                result = true
            }

            res.status(200).json({ success:true, favorited: result})
        })

})





router.post('/removeFromFavorite', (req, res) => { 

    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, doc })
        })

})

router.post('/addToFavorite', (req, res) => { 
    
    const favorite = new Favorite(req.body)

    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })

})




module.exports = router;
