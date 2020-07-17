import React, { useState, useRef, useCallback } from 'react'
import styled from "styled-components";
import useMovieSearch from '../../hooks/useMovieSearch'
import Loader from "../Helper/Loader";
import MovieCard from "./MovieCard";

const MovieContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 3em 3.5em;

  @media screen and (max-width: 3000px) {
    padding: 2em 2.5em;
  }

  @media screen and (max-width: 2000px) {
    padding: 2em 2.5em;
  }

  @media screen and (max-width: 1440px) {
    padding: 1.5em;
  }

  @media screen and (max-width: 1025px) {
    padding: 1em 0.65em;
  }

  @media screen and (max-width: 640px) {
    padding: 0.35em;
  }

  @media screen and (max-width: 361px) {
    padding: 0.25em;
  }
`;

const MovieList = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const {movies, hasMore, loading, error } = useMovieSearch(pageNumber)
  const observer = useRef();
  const lastMovieElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore) {
              setPageNumber(prevPageNumber => prevPageNumber + 1)
          }
      })
      if (node) observer.current.observe(node)
  }, [loading, hasMore])

  const renderMovieCards = movies.map((movie, index) => {
    if (movies.length === index + 1) 
    {
      return <MovieCard key={movie.id} forwardRef={lastMovieElementRef} movie={movie}></MovieCard>
    }else 
    {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>
    }
  });

  return (
    <>
      {error && <div>An error occured, please try again.</div>}
      {<>
        <MovieContainer>{renderMovieCards}</MovieContainer>
        <div>{loading && <Loader />}</div>
      </>
      }
    </>
    );
};

export default MovieList;
