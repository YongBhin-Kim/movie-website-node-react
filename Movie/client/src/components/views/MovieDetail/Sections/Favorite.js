// [Favorite Button 만들기]
// 2. Favorite Button 만들기
// (여기는 favorite component)

import React, { useEffect } from 'react'
import Axios from 'axios'

function Favorite(props) {
    
    const movieId = props.movieId // 모든 필요한 정보를 가져오기
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    useEffect(() => {
        
        let variables= { // 서버에 정보를 던져줘야함
            userFrom,
            movieId
        }

        Axios.post('/api/favoriteNumber1111') // 몇 명이나 button을 눌렀는지 Server에 요청해서 DB내의 정보를 가져옴
            .then(response => {
                if(response.data.success) {

                } else {
                    alert('숫자 정보를 가져오는 데에 실패했습니다ㅜㅜ')
                }
            })


    }) //, [input])


  return (
    <button>Favorite</button>
  )
}

export default Favorite