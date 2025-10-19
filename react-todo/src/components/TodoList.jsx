import { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Apprendre React', completed: true },
    { id: 2, text: 'Créer une Todo List', completed: false },
    { id: 3, text: 'Tester avec Vitest', completed: false }
  ])

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      }
      setTodos([...todos, newTodo])
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="todo-list">
      <AddTodoForm onAddTodo={addTodo} />
      
      <div className="todos-container">
        {todos.length === 0 ? (
          <p className="no-todos">Aucune tâche pour le moment. Ajoutez-en une !</p>
        ) : (
          <ul className="todos-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>
      
      <div className="todo-stats">
        <p>Total: {todos.length} | Complétées: {completedCount}</p>
      </div>
    </div>
  )
}

export default TodoList