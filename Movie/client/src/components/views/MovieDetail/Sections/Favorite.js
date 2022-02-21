// [Favorite Button 만들기]
// 2. Favorite Button 만들기
// (여기는 favorite component)

import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd';


function Favorite(props) {
    
    const movieId = props.movieId // 모든 필요한 정보를 가져오기
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title // title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0) // Favorite Num State에 넣기
    const [Favorited, setFavorited] = useState(false) // Favorite 했는지 state에 넣기

    let variables = { // 서버에 정보를 던져줘야함
        userFrom: userFrom,
        movieId: movieId,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }

    useEffect(() => {

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


    }, [])

    const onClickFavorite = () => {

        if (Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if(response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Favorite 리스트에서 지우는 걸 실패했습니다.')
                    }
                })
        } else {
            Axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if(response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Favorite 리스트에서 추가하는 걸 실패했습니다.')
                    }
                })
        }
    }

    return (
        <div>
            <Button onClick={onClickFavorite}>{Favorited ? " Not Favorite~" : "Add to Favorite~ "} {FavoriteNumber + 1000} </Button>
        </div>

    )
}

export default Favorite