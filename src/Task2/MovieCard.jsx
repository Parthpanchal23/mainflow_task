import React from 'react'

const MovieCard = ({result:{Poster,Title,Year}}) => {
  return (
    <div className='movie_card'>
      <img src={Poster} alt={Title} /> {Title}
      {Year}</div>
  )
} 

export default MovieCard  