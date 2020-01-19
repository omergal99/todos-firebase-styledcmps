import React from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';

import Input from '../common/Input';
import TodoPreview from './TodoPreview';

import { useTodos } from './todosHooks';
// import { useState } from 'react';

function Todos() {

  const [todos, setTodos] = useTodos();

  // const [todos, setTodos] = useState([
  //   { id: '1', content: 'buy gift for my girl', isChecked: false },
  //   { id: '2', content: 'lalala', isChecked: false }
  // ]);

  const handleKeyUp = useCallback(ev => {
    if (ev.which !== 13) return;
    setTodos([...todos, { id: Date.now(), content: ev.target.value, isChecked: false }]);
    ev.target.value = '';
  }, [setTodos, todos]);

  const toggleChecked = useCallback(todo => {
    const updateTodos = todos.map(to => to.id === todo.id ? todo : to);
    setTodos(updateTodos);
  }, [setTodos, todos]);

  const removeTodo = useCallback(todo => {
    const updateTodos = todos.filter(to => to.id !== todo.id);
    setTodos(updateTodos);
  }, [setTodos, todos]);

  const todosList = todos.map(todo => {
    return <TodoPreview key={todo.id} todo={todo}
      onToggleChecked={toggleChecked} onRemoveTodo={removeTodo} />
  })

  return (
    <Container>
      <Input onKeyUp={handleKeyUp} placeholder={'Add New Todo . .'} />
      <ul className="clean-list" style={{ overflow: 'auto', height: '100%' }} >
        {todosList}
      </ul>
    </Container>
  );
}

export default Todos;

const Container = styled.div`
  height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 2rem auto 0 auto;
`;