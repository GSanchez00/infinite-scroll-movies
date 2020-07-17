import React, {useState, useEffect} from "react";
import {getMovie} from "../apis/movie/movieAPI";
import LeftLayout from './LeftLayout'
import Details from '../components/Movie/Detail'

const Movie = (props) => {
    const [movie, setMovie] = useState()
    let movieId=parseInt(props.match.params.id, 10);
    useEffect(() => {
      async function fetchData() {
        try {
          const movie = await getMovie(movieId);
          setMovie(movie);
        } 
        catch (error) {
              console.error("Data Fetching Error:", "font-size: 18px", error);
          }
      }
      fetchData();
    }, [movie]);

  return (
    movie ?
    (<LeftLayout backdropImage={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}>
        <Details movie={movie} />
    </LeftLayout>)
      : 
    null);
};

export default Movie;