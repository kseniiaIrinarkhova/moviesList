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

useState(()=>{
 search('')
},[]);

async function search(query){
  try{
    let param="";
    if(query===''){
      query = `tt${Math.floor(Math.random() * (10000000)+1000000)}`
      param = 'i'
    }
    else param ='t'
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&${param}=${query}`;
  console.log(url)
    // Make get requestand store the response
  const response = await axios.get(url);

  // Set the Movie state to the received data
    setMovieData(response);
    console.log(movieData)
  }catch(err){
    console.log(err)
  }
}

  return (
    <>
      <div className="App">
        <Form searchFunction={search}/>
        {movieData ? <MovieDisplay movie={movieData.data}/> :null}
      </div>
    </>
  )
}

export default App
