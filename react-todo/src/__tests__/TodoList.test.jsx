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
    const todoItem = todoText.closest('li')
    
    // Vérifier que le todo n'est pas complété initialement
    expect(todoItem).not.toHaveClass('completed')
    
    await user.click(todoText)
    
    // Vérifier que le todo est maintenant complété
    expect(todoItem).toHaveClass('completed')
    expect(screen.getByText(/Complétées: 2/)).toBeInTheDocument()
  })

  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const todoToDelete = screen.getByText('Apprendre React')
    const deleteButtons = screen.getAllByLabelText('Supprimer la tâche')
    
    await user.click(deleteButtons[0])
    
    expect(todoToDelete).not.toBeInTheDocument()
    expect(screen.getByText(/Total: 2/)).toBeInTheDocument()
  })

  test('shows empty message when no todos', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    // Supprimer tous les todos
    const deleteButtons = screen.getAllByLabelText('Supprimer la tâche')
    for (const button of deleteButtons) {
      await user.click(button)
    }
    
    expect(screen.getByText('Aucune tâche pour le moment. Ajoutez-en une !')).toBeInTheDocument()
    expect(screen.getByText(/Total: 0/)).toBeInTheDocument()
  })

  test('toggles todo using toggle button', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const toggleButtons = screen.getAllByLabelText('Marquer comme terminée')
    await user.click(toggleButtons[0])
    
    expect(screen.getByText(/Complétées: 2/)).toBeInTheDocument()
  })

  // Test supplémentaire pour vérifier le compteur
  test('updates completed count correctly', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    // Vérifier le compteur initial
    expect(screen.getByText(/Complétées: 1/)).toBeInTheDocument()
    
    // Toggle un todo non complété
    const todoText = screen.getByText('Créer une Todo List')
    await user.click(todoText)
    
    // Vérifier que le compteur est incrémenté
    expect(screen.getByText(/Complétées: 2/)).toBeInTheDocument()
    
    // Toggle à nouveau pour le remettre à non complété
    await user.click(todoText)
    
    // Vérifier que le compteur est décrémenté
    expect(screen.getByText(/Complétées: 1/)).toBeInTheDocument()
  })
})