import useTodoContext from '../hooks/use-todo-context'
import TodoItem from './TodoItem'

const TodoList = () => {
  const {todos} = useTodoContext()

  // Move completed todos to the bottom
  const sortedTodos = [...todos].sort((a, b) => a.completed - b.completed)

  const renderedTodos = sortedTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))

  return (
    <div className="space-y-4">
      {renderedTodos}
    </div>
  )
}

export default TodoList
