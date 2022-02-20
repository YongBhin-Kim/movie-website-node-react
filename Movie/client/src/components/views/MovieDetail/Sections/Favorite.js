// [Favorite Button 만들기]
// 2. Favorite Button 만들기
// (여기는 favorite component)

import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Favorite(props) {
    
    const movieId = props.movieId // 모든 필요한 정보를 가져오기
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title // title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0) // Favorite Num State에 넣기
    const [Favorited, setFavorited] = useState(false) // Favorite 했는지 state에 넣기

    useEffect(() => {
        
        let variables = { // 서버에 정보를 던져줘야함
            userFrom,
            movieId
        }
//
        Axios.post('/api/favorite/favoriteNumber', variables) // post request, 몇 명이나 button을 눌렀는지 Server에 요청해서 DB내의 정보를 가져옴
            .then(response => {
                console.log('favoriteNumber3123', response.data) // 확인해보자
                setFavoriteNumber(response.data.FavoriteNumber)
                if(response.data.success) {
                } else {
                    alert('숫자 정보를 가져오는 데에 실패했습니다ㅜㅜ')
                }
            })

        Axios.post('/api/favorite/favorited', variables) 
            .then(response => {

                console.log('favorited1111',response.data)
                if(response.data.success) {
                    setFavorited(response.data.Favorited)
                } else {
                    alert('정보를 가져오는 데에 실패했습니다ㅜㅜㅜ')
                }
        })


    }) //, [input])


    return (
        <div>
            <button>{Favorited ? " Not Favorite" : "Add to Favorite "} {FavoriteNumber} </button>
        </div>

    )
}

export default Favorite