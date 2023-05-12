import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

TodoList.propTypes = {
  mainTodoList: PropTypes.array,
  onClickTodo: PropTypes.func,
};

TodoList.defaultProps = {
  mainTodoList: [],
  onClickTodo: null,
};

function TodoList({ mainTodoList, onClickTodo }) {
  const handleClick = (todo, index) => {
    if (!onClickTodo) return;
    onClickTodo(todo, index);
  };

  return (
    <ul className='todo-list'>
      {mainTodoList.map((todo, index) => {
        return (
          <li
            key={todo.id}
            onClick={() => {
              handleClick(todo, index);
            }}
          >
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
