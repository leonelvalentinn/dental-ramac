// import React from 'react';
import '../Styles/video.css'
import Video from '../assets/2149206227.webp'
import Video1 from '../assets/2149206227.webp'
import ButtonContact from './ButtonContact'

const VideoGround = () => {
  return (
    <div className='container-video'>
      <img
        src={Video}
        className='video-escritorio image'
      />

      <img
        src={Video1}
        className='video-mobile image'
      />

      <div className='video-text'>
        <div className='container-video-text'>
          <h2>¡No lo pienses más!</h2>
          <p>
            El mejor momento para visitar el dentista es cuando no te duele nada.
          </p>

          <ButtonContact />
        </div>
      </div>
    </div>
  )
}

export default VideoGround
