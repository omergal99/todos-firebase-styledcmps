import React from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

function TodoPreview({ todo, onToggleChecked, onRemoveTodo }) {

  const toggleChecked = useCallback(() => {
    onToggleChecked({ ...todo, isChecked: !todo.isChecked });
  }, [onToggleChecked, todo])

  const removeTodo = useCallback(() => {
    onRemoveTodo(todo);
  }, [onRemoveTodo, todo])

  return (
    <TodoItem >
      <Text isChecked={todo.isChecked} onClick={toggleChecked}>{todo.content}</Text>
      <Remove onClick={removeTodo}>X</Remove>
    </TodoItem>
  );

}

export default TodoPreview;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 1.5em;
  text-align: center;
  color: #00008a;
  margin: 0;
  padding: 0.5rem;
  text-align: left;
  background-color: #d4c0a9;
  border-top: 1px solid #00008a;
  `;

const Text = styled.span`
  ${({ isChecked }) => isChecked && `text-decoration: line-through`};
`;

const Remove = styled.span`
  padding: 4px;
  min-width: 25px;
  margin: 0 0 0 12px;
`;