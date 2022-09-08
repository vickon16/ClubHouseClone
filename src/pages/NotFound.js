import React from 'react'
import styled from 'styled-components';

const NotFound = () => {
  return (
    <Main className="App">Page Not Found</Main>
  );
};

export default NotFound;

const Main = styled.main`
  width: min(100%, 1000px);
  padding: min(1.5rem, 3%);
  position: relative;
  padding-top: 4.4rem;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 0 5px #cccccc;
  text-align: center;
  font-size: clamp(1.3em, 1.6vw, 1.6em)
`;
