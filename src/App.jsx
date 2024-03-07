//additional library
import { useState, useEffect } from 'react'
import axios from 'axios'

//components
import Form from './components/Form/Form';
import MovieDisplay from './components/MovieDisplay/MovieDisplay';

//style
import './App.css'

//constant variables
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {

  //state to hold movie data
const[movieData,setMovieData] = useState(null);

async function search(query){
  try{
  // Make get requestand store the response
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${query}`
  );

  // Set the Movie state to the received data
    setMovieData(response);
    console.log(response)
  }catch(err){
    console.log(err)
  }
}

  return (
    <>
      <div className="App">
        <Form searchMovie={getMovieData}/>
        {movieData ? <MovieDisplay /> :null}
      </div>
    </>
  )
}

export default App
