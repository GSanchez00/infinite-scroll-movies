import { useEffect, useState } from 'react'
import {getMovies} from "../apis/movie/movieAPI";

export default function useMovieSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    
    async function fetchData() {
      try {
        const response = await getMovies(pageNumber);
        setMovies(prevMovies => {
          return [...new Set([...prevMovies, ...response.results.map(b => b)])]
        })
        setHasMore(response.total_pages > pageNumber)
        setLoading(false)
      } 
      catch (error) {
        console.error("Data Fetching Error:", "font-size: 18px", error);
        setError(true)
      }
    }
    fetchData();
  }, [pageNumber])

  return { loading, error, movies, hasMore }
}