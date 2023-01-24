import React from 'react'
import "./Card.css"

const Card = ({ prop }) => {
  console.log(prop)
  return (
    <div className='card' >

      {/* TOP SECTION */}

      <div className='top-section'>
        <div className='name-location'>
          <p>
            <span className='name'>{prop.name}</span> <br />
            <span className='location'>{prop.location}</span>
          </p>
        </div>
        <div className='dots'>
          <img src={require('../Images/more.png')} alt='more' />
        </div>
      </div>

      {/* IMAGE SECTION */}

      <div className='img-section'>
        <img src={`https://instaclone-gr1u.onrender.com/images/${prop.imagefile}`} alt="instaPost" />
      </div>

      {/* BOTTTOM SECTION */}

      <div className='desc-section'>

        <div className='upper-desc'>
          <div className='heart-likes'>
            <img src={require('../Images/heart.png')} alt='heart' />
            <span><img src={require('../Images/send.png')} alt='send' /></span>
            <div className='likes'>{prop.likes} likes</div>
          </div>
          <div className='date'>{prop.date}</div>
        </div>
        <div className='description'>{prop.description}</div>

      </div>

    </div>
  )
}

export default Card