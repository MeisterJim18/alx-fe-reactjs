import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => onToggle(todo.id)}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;