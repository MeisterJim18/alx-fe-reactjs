import './TodoItem.css'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span 
        className="todo-text"
        onClick={() => onToggle(todo.id)}
        data-testid="todo-text"
      >
        {todo.text}
      </span>
      
      <div className="todo-actions">
        <button 
          className={`toggle-button ${todo.completed ? 'completed' : ''}`}
          onClick={() => onToggle(todo.id)}
          aria-label={todo.completed ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
          data-testid="toggle-button"
        >
          {todo.completed ? '✓' : '○'}
        </button>
        
        <button 
          className="delete-button"
          onClick={() => onDelete(todo.id)}
          aria-label="Supprimer la tâche"
          data-testid="delete-button"
        >
          ×
        </button>
      </div>
    </li>
  )
}

export default TodoItem