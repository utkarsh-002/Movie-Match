import React from 'react'
import SearchIcon from '../Search.svg'
const Search = ({getMovies,ttle,setTtle}) => {
  return (
    <div className='search'>
    <input type="text" id="searchBar" placeholder='Search for Movie' value={ttle} onChange={(e)=>
        {setTtle(e.target.value)}}/>
    <img src={SearchIcon} alt="Search" onClick={()=>{getMovies(ttle)}}/>
    </div>
  )
}

export default Search
