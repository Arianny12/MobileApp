import axios from 'axios'
import {createContext, useState, useCallback} from 'react'

const TodoContext = createContext()

function Provider({children}) {
  const [todos, setTodos] = useState([])

  const fetchTodos = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/todos')
    setTodos(response.data)
  }, [])

  const createTodo = async ({title, dueDate, type, amount, recurring}) => {
    const response = await axios.post('http://localhost:3001/todos', {
      title,
      dueDate,
      type,
      amount,
      recurring,
      completed: false, 
      // show "incomplete" when creating a new todo
    })
    const updatedTodos = [...todos, response.data]
    setTodos(updatedTodos)
  }

  const toggleTodoCompletedById = async (id, completed) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      completed: !completed,
    })

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, ...response.data}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const editTodoById = async (id, {title, dueDate, type, amount, recurring}) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title,
      dueDate,
      type,
      amount,
      recurring,
    })

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, ...response.data}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const contextValues = {
    todos,
    fetchTodos,
    createTodo,
    toggleTodoCompletedById,
    editTodoById,
    deleteTodoById,
  }

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  )
}

export {Provider}
export default TodoContext
