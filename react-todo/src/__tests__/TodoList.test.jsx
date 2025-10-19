import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import TodoList from '../components/TodoList'

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />)
    
    expect(screen.getByText('Apprendre React')).toBeInTheDocument()
    expect(screen.getByText('Créer une Todo List')).toBeInTheDocument()
    expect(screen.getByText('Tester avec Jest')).toBeInTheDocument()
  })

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Ajouter une nouvelle tâche')
    const addButton = screen.getByText('Ajouter')
    
    await user.type(input, 'Nouvelle tâche')
    await user.click(addButton)
    
    expect(screen.getByText('Nouvelle tâche')).toBeInTheDocument()
  })

  test('toggles todo completion when clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const todoText = screen.getByText('Créer une Todo List')
    await user.click(todoText)
    
    // Le todo devrait maintenant avoir la classe completed
    const todoItem = todoText.closest('li')
    expect(todoItem).toHaveClass('completed')
  })

  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const deleteButtons = screen.getAllByText('×')
    await user.click(deleteButtons[0])
    
    expect(screen.queryByText('Apprendre React')).not.toBeInTheDocument()
  })
})