import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

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
const PageLink = styled(Link)`
  color: white;
  font-weight: 600;
`;

const NotFound = () => (
  <>
      <Wrapper>
        <PageText>This page doesn't exist</PageText>
        <PageLink to="/">Go back to homepage</PageLink>
      </Wrapper>
  </>
);

export default NotFound;