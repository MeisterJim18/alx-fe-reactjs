import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import TodoList from '../components/TodoList'

describe('TodoList', () => {
  test('renders initial todos', () => {
    render(<TodoList />)
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build Todo App')).toBeInTheDocument()
  })

  test('adds new todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    await user.type(screen.getByPlaceholderText('Add a new todo'), 'New Task')
    await user.click(screen.getByText('Add Todo'))
    
    expect(screen.getByText('New Task')).toBeInTheDocument()
  })

  test('toggles todo completion', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const todo = screen.getByText('Learn React')
    await user.click(todo)
    
    expect(todo).toHaveStyle('text-decoration: line-through')
  })

  test('deletes todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)
    
    const deleteButtons = screen.getAllByText('Delete')
    await user.click(deleteButtons[0])
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })
})