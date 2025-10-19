import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from '../components/TodoList'

// Test 1: Vérifier le rendu initial
test('renders initial todos correctly', () => {
  render(<TodoList />)
  
  // Vérifier que les todos initiaux sont affichés
  expect(screen.getByText('Learn React')).toBeInTheDocument()
  expect(screen.getByText('Build Todo App')).toBeInTheDocument()
})

// Test 2: Ajouter un nouveau todo
test('adds a new todo when form is submitted', async () => {
  const user = userEvent.setup()
  render(<TodoList />)
  
  // Trouver l'input et le bouton
  const input = screen.getByPlaceholderText('Add a new todo')
  const addButton = screen.getByText('Add Todo')
  
  // Simuler la saisie utilisateur
  await user.type(input, 'New Test Todo')
  await user.click(addButton)
  
  // Vérifier que le nouveau todo est ajouté
  expect(screen.getByText('New Test Todo')).toBeInTheDocument()
})

// Test 3: Basculer l'état d'un todo
test('toggles todo completion status when clicked', async () => {
  const user = userEvent.setup()
  render(<TodoList />)
  
  const todoText = screen.getByText('Learn React')
  
  // Cliquer sur le todo pour le basculer
  await user.click(todoText)
  
  // Vérifier que le style a changé
  expect(todoText).toHaveStyle('text-decoration: line-through')
})

// Test 4: Supprimer un todo
test('deletes a todo when delete button is clicked', async () => {
  const user = userEvent.setup()
  render(<TodoList />)
  
  const deleteButtons = screen.getAllByText('Delete')
  
  // Cliquer sur le premier bouton delete
  await user.click(deleteButtons[0])
  
  // Vérifier que le todo a été supprimé
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
})