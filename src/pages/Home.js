import React from 'react';
import styled from 'styled-components';
import Todos from '../cmps/Todos';

function Home() {
  return (
    <div className="Home">
      <Title>My first h1 in styled component</Title>
      <Button>My first button in styled component</Button>
      <Todos />
    </div>
  );
}

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #a25520;
  margin: 0;
  padding: 1rem 0;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #a25520;
  border: 2px solid #a25520;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.3s all ease-out;
  &:hover {
    background-color: #a25520;
    color: #ddd;
  }
`;