import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {

    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([]) // state에 넣기

    useEffect(() => {
        // console.log(props.match) // 634649

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response) // response를 movie state에 넣기 (2)
            })

    }, [])
  
  // 렌더링
    return (
        <div>

        {/* Header */}

        <MainImage
            image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
            title={Movie.original_title}
            text={Movie.overview}
        />


        {/* Body */}
        <div style={{ width: '85%', margin: '1rem auto' }}>

            {/* Movie Info 템플릿 UI 만들기 -> MovieInfo에서 가져옴 */}
            <MovieInfo 
                movie={ Movie } // movie props 안에 Movie state(정보) 넣기
            />


            <br />
            {/* Actors Grid */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <button> Toggle Actor View </button>
            </div>


        </div>

        </div>
  )
}

export default MovieDetail