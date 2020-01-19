import React from 'react';
import styled from 'styled-components';

const Input = ({ onKeyUp, placeholder }) => (<Container onKeyUp={onKeyUp} placeholder={placeholder} />);

export default Input;

const Container = styled.input`
  width: 100%;
  border: 1px solid #979797;
  padding: 0.6rem 0 0.6rem 1rem;
  font-size: 1.4rem;
  border: none;
`;
