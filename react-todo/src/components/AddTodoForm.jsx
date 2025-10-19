import { useState } from 'react'
import './AddTodoForm.css'

const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Quelle est votre prochaine tâche ?"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Ajouter
        </button>
      </div>
    </form>
  )
}

export default AddTodoForm