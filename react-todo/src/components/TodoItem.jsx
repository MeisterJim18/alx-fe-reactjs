import './TodoItem.css'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span 
        className="todo-text"
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      
      <div className="todo-actions">
        <button 
          className="toggle-button"
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? '✓' : '○'}
        </button>
        
        <button 
          className="delete-button"
          onClick={() => onDelete(todo.id)}
        >
          ×
        </button>
      </div>
    </li>
  )
}

export default TodoItem