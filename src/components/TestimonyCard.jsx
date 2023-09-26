import React from 'react'

export const TestimonyCard = ({ img, name, disc }) => {
  return (
    <div className='card testimony-card'>
        <img className='card-img-top testimony-img' src={img} alt="" />
        <div className='card-body'>
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{disc}</p>
        </div>
    </div>
  )
}
