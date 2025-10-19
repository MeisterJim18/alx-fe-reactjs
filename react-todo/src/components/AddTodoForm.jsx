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
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter une nouvelle tâche"
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Ajouter
      </button>
    </form>
  )
}

export default AddTodoForm