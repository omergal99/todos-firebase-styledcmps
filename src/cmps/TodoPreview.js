import React from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

function TodoPreview({ todo, onClick }) {

  const toggleChecked = useCallback(() => {
    onClick({ ...todo, isChecked: !todo.isChecked });
  }, [onClick, todo])

  return (
    <TodoItem onClick={toggleChecked} isChecked={todo.isChecked} >{todo.content}</TodoItem>
  );

}

export default TodoPreview;

const TodoItem = styled.li`
  cursor: pointer;
  user-select: none;
  font-size: 1.5em;
  text-align: center;
  color: blue;
  margin: 0;
  padding: 1rem 0;
  ${({ isChecked }) => isChecked && `text-decoration: line-through`};
`;