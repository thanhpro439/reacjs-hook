import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {};

const initTodoList = ['Learn English', 'Learn JS', 'Learn Reacjs'];

function TodoList(props) {
  const [todoList, setTodoList] = useState(initTodoList);
  const handleClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <ul className='todo-list'>
      {todoList.map((todo, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              handleClick(todo, index);
            }}
          >
            {todo}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
