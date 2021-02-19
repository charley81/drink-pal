import React from 'react'
import { Link } from 'react-router-dom'

export const Drink = ({ id, image, glass, info, name }) => {
  return (
    <article>
      <div img-container>
        <img src={image} alt={name} />
      </div>
      <drink className="info">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/drink/${id}`}>more info</Link>
      </drink>
    </article>
  )
}
