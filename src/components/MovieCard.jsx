import React from 'react'

const MovieCard = ({result:{Poster,Title,Year}}) => {
  return (
    <div className='movie_card '>
      <img src={Poster} alt={Title} /> 
      <div className='content'>
      {Title}
      </div>
      <div>
      {Year}
      </div>
      </div>
  )
} 

export default MovieCard  