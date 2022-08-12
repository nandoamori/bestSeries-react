import { useState } from "react"
import { useEffect } from "react"
import {Link, useParams} from "react-router-dom"
import { FaAngleLeft } from "react-icons/fa";
import ApiKey from "../../config/apiKey"
import './details.css'

const Details = () => {
  const {id} = useParams()
  const [serie, setSerie] = useState({})
  const images = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${ApiKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
      const serie = {
        id, 
        name: data.name, 
        overview: data.overview, 
        episodes: data.number_of_episodes,
        seasons: data.number_of_seasons,
        status: data.status, 
        image: `${images}${data.poster_path}`,
        tmdb: data.vote_average,
              
      }
      setSerie(serie) 
      })
  }, [id]  )
  
  return (

    <div className="container-details">
      <img src={serie.image} alt={serie.overview} />

      <div className="dataSeries">

      <h1>{serie.name}</h1>
      <span className="sinopse">Sinopse: {serie.overview}</span>
      <span className="seasons">Seasons: {serie.seasons}</span>
      <span className="episodes">Episodes: {serie.episodes}</span>
      <span className="status">Status: {serie.status}</span>
      <span className="average">TMDB: {serie.tmdb}</span>
      <Link className="link" to={"/"}><button className="btn"><FaAngleLeft />Back </button></Link>

      </div>

    </div>
  )
}

export default Details