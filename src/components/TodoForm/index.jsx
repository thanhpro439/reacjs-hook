import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState('');
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!onSubmit) return;
    const newTodo = {
      id: Math.trunc(Math.random() * 1000),
      title: value,
    };

    onSubmit(newTodo);

    setValue('');
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input type='text' value={value} onChange={handleValueChange} />
    </form>
  );
}

export default TodoForm;
