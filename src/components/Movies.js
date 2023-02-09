import React from 'react'
import Movie from './Movie'
const Movies = ({movies}) => {
  return (
    <div className='container'>
        {movies.map((movie)=>(
            <Movie key={movie.imdbID} movie={movie}/>
        ))}
    </div>
  )
}

export default Movies
