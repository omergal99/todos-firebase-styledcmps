import React from 'react';
import styled from 'styled-components';

const Input = ({ onKeyUp }) => (<Container onKeyUp={onKeyUp} />);

export default Input;

const Container = styled.input`
  width: 100%;
  border: 1px solid #979797;
  padding: 0.4rem 0 0.4rem 1rem;
  font-size: 1.4rem;
`;
