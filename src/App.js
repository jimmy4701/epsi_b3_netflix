import React, {useState} from 'react'
import './App.css';
import MovieHeader from './components/MovieHeader'

const App = () => {

  const main_movie = {
    title: "Avengers",
    type: "Film",
    image: "https://wallpaperaccess.com/full/329583.jpg"
  }

  return (
    <div>
      <MovieHeader movie={main_movie} />
    </div>
  );
}

export default App;
