import axios from "axios";
import { TMDB_API_KEY } from "./key";

const baseURL = "https://api.themoviedb.org/3";

export const getMovie = async(movieId) => 
{
    try
    {
        const fetchUrl = `${baseURL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=credits,videos,images&include_image_language=en,null`;
        const authResponse = await axios.get(fetchUrl);
        const response = authResponse.data;
        return response;
    }
    catch(error)
    {
      throw error;
    }
}


export const getMovies = async(pageNumber) => 
{
    try
    {
        const fetchUrlMovies= `${baseURL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`;
        const authResponse = await axios.get(fetchUrlMovies);
        const response = authResponse.data;
        return response;
    }
    catch(error)
    {
      throw error;
    }
}