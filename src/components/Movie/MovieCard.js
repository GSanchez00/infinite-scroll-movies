import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AltPoster from "../../img/posterplaceholder.jpg";

const CardContainer = styled.div`
  position: relative;
  flex: 0 0 calc(20% - 40px);
  margin: 36px 20px;
  display: flex;

  /* margin: 1.55vw 1vw; */

  border-radius: 10px 10px 0 0;
  transition: transform ease 300ms;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  color: white;

  :hover {
    cursor: pointer;

    backface-visibility: hidden;
    transform: scale(1.05);
  }

  :active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 3000px) {
    flex: 0 0 calc(18.2857% - 36px);
    margin: 24px 18px;
  }

  @media screen and (max-width: 1921px) {
    flex: 0 0 calc(18.6667% - 28px);
    margin: 22px 14px;
  }

  @media screen and (max-width: 1440px) {
    flex: 0 0 calc(20% - 20px);
    margin: 15px 10px;
  }

  @media screen and (max-width: 1025px) {
    flex: 0 0 calc(25% - 16px);
    margin: 10px 8px;
  }

  @media screen and (max-width: 779px) {
    flex: 0 0 calc(33.33% - 16px);
    margin: 10px 8px;
  }

  @media screen and (max-width: 361px) {
    /* flex: 1 0 33%; */
    flex: 0 0 calc(50% - 10px);
    margin: 10px 5px;
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledRating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0.25rem;
  padding: 0.3rem;
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.808);
`;
const RatingIcon = styled(FontAwesomeIcon).attrs({ icon: faStar })`
  color: gold;
  margin: 0 0.25rem 0 0;
`;
const StyledTitle = styled.h5`
  position: absolute;
  bottom: 0;
  margin: 0.0rem;
  padding: 0.0rem;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
`;

const MovieCard = (props) => {
  const { poster_path, title, vote_average, id } = props.movie;
  const imageURL = `https://image.tmdb.org/t/p/w780${poster_path}`;

  let renderRating;
  if (vote_average !== 0) {
    renderRating = (
      <StyledRating>
        <RatingIcon />
        {vote_average}
      </StyledRating>
    );
  }

  return (
    <CardContainer>
      <Link to={"/popular/" + id}>
        <StyledImg
          ref={props.forwardRef  ? props.forwardRef  : null}
          src={poster_path ? imageURL : AltPoster}
          alt={`${title} poster`}
        />
      </Link>
      {renderRating}
      {<StyledTitle>{props.movie.title}</StyledTitle>}
    </CardContainer>
  );
};

export default MovieCard;