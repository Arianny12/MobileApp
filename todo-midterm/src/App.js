import {useEffect} from 'react'
import useTodoContext from './hooks/use-todo-context'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import './global.css'

const App = () => {
  const {fetchTodos} = useTodoContext()

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <header className="text-center py-6 bg-indigo-500 text-white w-full">
        <h1 className="text-4xl font-bold">Finance Tracker</h1>
      </header>

      <div className="container flex flex-col md:flex-row justify-center items-start md:items-center mx-auto px-4 py-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <TodoCreate />
        </div>

        <div className="w-full md:w-1/2">
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
