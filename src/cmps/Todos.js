import React from 'react';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

import Input from '../common/Input';
import TodoPreview from './TodoPreview';

function Todos() {

  const [todos, setTodos] = useState([
    { id: '1', content: 'buy gift for my girl', isChecked: false }
  ]);

  const handleKeyUp = useCallback(ev => {
    if (ev.which !== 13) return;
    setTodos([...todos, { id: Date.now(), content: ev.target.value, isChecked: false }]);
    ev.target.value = '';
  }, [setTodos, todos]);

  const toggleChecked = useCallback(todo => {
    const updateTodos = todos.map(to => to.id === todo.id ? todo : to);
    setTodos(updateTodos);
  }, [setTodos, todos]);

  const todosList = todos.map(todo => {
    return <TodoPreview key={todo.id} todo={todo} onClick={toggleChecked} />
  })

  return (
    <Container>
      <Input onKeyUp={handleKeyUp} />
      <ul className="clean-list">
        {todosList}
      </ul>
    </Container>
  );
}

export default Todos;

const Container = styled.div`
  width: 50%;
  margin: 2rem auto 0 auto;
`;