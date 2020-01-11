import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <div className="Home">
      <Title>I am a h1 h1 h1</Title>
      <Button>I am a Button</Button>
    </div>
  );
}

export default Home;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;