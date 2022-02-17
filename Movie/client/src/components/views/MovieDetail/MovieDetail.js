import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';
import Favorite from './Sections/Favorite';


function MovieDetail(props) {

    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([]) // state에 넣기
    const [Casts, setCasts] = useState([]) // response(콘솔창의 responseForCrew)에서 가져와서 state에 넣기, initial은 배열로 설정
    // const [Crews, setCrews] = useState([]) // crew 버전 state

    const [ActorToggle_Cast, setActorToggle_Cast] = useState(false)
    // const [ActorToggle_Crew, setActorToggle_Crew] = useState(false)

    useEffect(() => {
        // console.log(props.match) // 634649

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log('InfoView1111', response)
                setMovie(response) // response(= info1111)를 movie state에 넣기 (2)
            })


        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                // console.log('responseForCrew1111', response) // 이제 state에 넣자 ! -> const [Cast, setCast]
                console.log('ViewForCast', response)
                setCasts(response.cast)// response.cast -> cast만 넣기(crew 제외)
        })

    //     fetch(endpointCrew)
    //         .then(response => response.json())
    //         .then(response => {
    //             console.log('ViewForCrew1111', response)
    //             setCasts(response.crew)// response.crew -> crew만 넣기(cast 제외)
    // })

    }, [])
  

    const toggleActorView_Cast = () => {
        setActorToggle_Cast(!ActorToggle_Cast)
    }
    /** 
    const toggleActorView_Crew = () => {
        setActorToggle_Crew(!ActorToggle_Crew)
    }
    */




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
            
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}> {/* ./Sections/Favorite 에서 함수(버튼) 호출 */}
                <Favorite  movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')}> </Favorite> {/* 모든 무비 정보를 favorite component(Favorie.js) 에 넘김 */} 
            </div>


            {/* Movie Info 템플릿 UI 만들기 -> MovieInfo에서 가져옴 */}
            <MovieInfo 
                movie={ Movie } // movie props 안에 Movie state(정보) 넣기
            />


            <br />   {/* 첫 페이지와 비슷하므로 landing page의 movie grid card 에서 코드 가져옴 */}
            
            {/* Actors Grid */}

            <div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <button onClick={toggleActorView_Cast}> Toggle Cast View </button>
            </div>

            {/* Cast버전 toggle 버튼 */} {/* 나중에 Crew랑 함수로 빼기 */}
            {ActorToggle_Cast && 
            <Row gutter={[16, 16]}> 
                {Casts && Casts.map((cast, index) => (
                    <React.Fragment key={index}>
                        <GridCards
                            image={cast.profile_path ?
                                `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                            caracterName={cast.name}
                        />
                    </React.Fragment>
                ))}

            </Row>
            }
            </div>


{/**
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <button onClick={toggleActorView_Crew}> Toggle Crew View </button>
            </div>

            <div>
            {/* Crew버전 toggle 버튼 /*

            {ActorToggle_Crew && 
            <Row gutter={[16, 16]}> 
                {Crews && Crews.map((crew, index) => (
                    <React.Fragment key={index}>
                        <GridCards
                            image={crew.profile_path ?
                                `${IMAGE_BASE_URL}w500${crew.profile_path}` : null}
                            caracterName={crew.name}
                        />
                    </React.Fragment>
                ))}

            </Row>
            }
            </div> 
*/}



        </div>
        </div>
  )
}

export default MovieDetail