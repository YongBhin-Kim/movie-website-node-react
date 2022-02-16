// import { response } from 'express';
import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd'; // antd 디자인 사용


function LandingPage() {

    /* react에서 제공하는, movie state에 다 들어가 있음. */
    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0) //

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)

    }, [])


    // load more 버튼을 눌렀을 때 발생
    const loadMoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)

    }

    // 반복을 줄이기 위해 함수로 만듬 (매개변수는 endpoint = ~1 , ~2 , ...)
    const fetchMovies = (endpoint ) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                console.log(response.results)
                setMovies([...Movies, ...response.results]) // 정보들을 movies 라는 state에 넣은것
                setMainMovieImage(response.results[0])
                setCurrentPage(response.page)

        })
    }

    return (
        <div style={{width: '100%', margin: '0'}}>

            {/* Main Image */}
            {MainMovieImage &&
                <MainImage 
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />
            }

            <div style={{width: '85%', margin: '1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr />

            {/* Movie Grid Cards */}

            <Row gutter={[16, 16]}> 

                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards 
                            image={movie.poster_path ?
                                `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                            movieId={movie.id}
                            movieName={movie.original_title}
                        />
                    </React.Fragment>
                ))}

            </Row>

            
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={loadMoreItems}> Load More</button> 
            </div>

        </div>
    )
}

// Load More 클릭 시에 일어난다 -> <button onClick={클래스이름}>

export default LandingPage

// react.fragment ?? 