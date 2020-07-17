import React from "react";
import styled from "styled-components";

import MovieList from "../components/Movie/MovieList";

const Wrapper = styled.div`
  margin-top: 4em;
  text-align: center;
  @media screen and (max-width: 500px) {
    margin-top: 3em;
  }
`;
const PageText = styled.h1`
  margin: 0 6em;
  color: #3DBB3D;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (max-width: 500px) {
    margin: 1em;
  }
`;

const PopularMovies = () => {
  return (
    <Wrapper>
      <PageText>Popular Movies</PageText>
      <MovieList />
    </Wrapper>
  );
};

export default PopularMovies;
