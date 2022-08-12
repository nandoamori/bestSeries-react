import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiKey from '../../config/apiKey';
import './home.css'


function Home() {

const [series, setSeries] = useState([])
const images = 'https://image.tmdb.org/t/p/w500/'
useEffect(() => {

  fetch(`
  https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setSeries(data.results))
}, []);

  return (
    <div className="mySeries">
      <h1>Popular TV Shows</h1>
      <ul>
        {series.map(serie => {
          return ( 
          <li key={serie.id}>
            <Link to={`/details/${serie.id}`}> <img src={`${images}${serie.poster_path}`} alt="" /></Link>
            <span>{serie.name}</span>
              </li>
            );
              })}
      </ul>
    </div>
    )}
       

export default Home;
