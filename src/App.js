import './App.css'
import { useState,useEffect } from 'react';
import Search from './components/Search'
import Movies  from './components/Movies';

const API_URL = 'https://omdbapi.com/?apikey=125e57c7';
const App = () => {
    const [title, setTitle] = useState("")
    const [movies, setMovies] = useState([])
    const [showMovies,setShow]=useState(false)
    const searchMovie= async (title)=>{
    const data=await fetch(`${API_URL}&s=${title}`).then((res)=>res.json()).catch((e)=>{
            console.log("Error found:"+e)
        })
        setMovies(data.Search)
    }
    const getMovies= async ()=>{
        await searchMovie(title)
        setShow(true)
        setShow(true)
    }
    
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <Search getMovies={getMovies} title={title} setTtle={setTitle} showMovies={showMovies}/>
      {
        movies.length>0 ? showMovies?<Movies movies={movies}/>:"" :
        (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App
