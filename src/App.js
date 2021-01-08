import React, {useState} from 'react'
import './App.css';
import MovieHeader from './components/MovieHeader'

const App = () => {
  const [color, setColor] = useState("red")

  const main_movie = {
    title: "Avengers",
    type: "Film"
  }

  const toggleColor = () => {
    if(color === 'red'){
      setColor("blue")
    }else{
      setColor('red')
    }
  }

  return (
    <div className="App">
      <MovieHeader movie={main_movie} color={color} />
      <input type="text" onChange={e => setColor(e.target.value)} value={color} />
    </div>
  );
}

export default App;
