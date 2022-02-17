import React from 'react'
import { Col } from 'antd'; // antd 디자인 사용

// 주소를 가져오기 위해 LandingPage 에서 component 를 가져옴 (props)
function GridCards(props) {

  if(props.landingPage) {
    return (
      <Col lg={6} md={8} xs={24}>
          <div style={{ position: 'relative' }}> 
              <a href={`/movie/${props.movieId}`} >
                  <img style={{ width: '100%', height: '200px' }} src={props.image} alt={props.movieName} /> 
              </a>
          </div>
      </Col>
    )
  } else {
    return (
      <Col lg={6} md={8} xs={24}>
          <div style={{ position: 'relative' }}>              
                  <img style={{ width: '100%', height: '200px' }} src={props.image} alt={props.caracterName} /> 
          </div>
      </Col>

    )
  }


}

export default GridCards