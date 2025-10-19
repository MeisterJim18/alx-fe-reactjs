import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import TodoList from '../components/TodoList'

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />)
    
    expect(screen.getByText('Apprendre React')).toBeInTheDocument()
    expect(screen.getByText('Créer une Todo List')).toBeInTheDocument()
    expect(screen.getByText('Tester avec Vitest')).toBeInTheDocument()
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument()
    expect(screen.getByText(/Complétées: 1/)).toBeInTheDocument()
  })

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const input = screen.getByPlaceholderText('Quelle est votre prochaine tâche ?')
    const addButton = screen.getByText('Ajouter')
    
    await user.type(input, 'Nouvelle tâche de test')
    await user.click(addButton)
    
    expect(screen.getByText('Nouvelle tâche de test')).toBeInTheDocument()
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument()
  })

  test('does not add empty todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const initialTodos = screen.getAllByRole('listitem')
    const addButton = screen.getByText('Ajouter')
    
    await user.click(addButton)
    
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodos.length)
  })

  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const todoText = screen.getByText('Créer une Todo List')
    
    expect(todoText).not.toHaveStyle('text-decoration: line-through')
    
    await user.click(todoText)
    
    expect(todoText).toHaveStyle('text-decoration: line-through')
    expect(screen.getByText(/Complétées: 2/)).toBeInTheDocument()
  })

  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const initialTodos = screen.getAllByRole('listitem')
    const deleteButtons = screen.getAllByLabelText('Supprimer la tâche')
    
    await user.click(deleteButtons[0])
    
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodos.length - 1)
    expect(screen.queryByText('Apprendre React')).not.toBeInTheDocument()
  })

  test('shows empty message when no todos', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const deleteButtons = screen.getAllByLabelText('Supprimer la tâche')
    
    // Supprimer tous les todos
    for (let i = 0; i < deleteButtons.length; i++) {
      await user.click(screen.getAllByLabelText('Supprimer la tâche')[0])
    }
    
    expect(screen.getByText('Aucune tâche pour le moment. Ajoutez-en une !')).toBeInTheDocument()
    expect(screen.getByText(/Total: 0/)).toBeInTheDocument()
  })

  test('toggles todo using toggle button', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const toggleButtons = screen.getAllByLabelText(/Marquer comme/)
    await user.click(toggleButtons[1])
    
    expect(screen.getByText(/Complétées: 2/)).toBeInTheDocument()
  })
})