import React from 'react';
/** MainImage Component */

function MainImage(props) {
    return (
        <div style={{ background: `linear-gradient(to bottom, rgba(0.0.0.0)
        39%, rgba(0,0,0,0)
        41%, rgba(0,0,0,0.65)
        100%),
        url('${props.image}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <h2 style={{ color: 'white' }}> {props.title} </h2>
                <p style={{ color: 'white', fontSize: '1rem' }}> {props.text} </p>

                </div>
            </div>
        </div>
    )
}

/** 다른 데에서도 사용할 수 있게 export 해준다. */
export default MainImage