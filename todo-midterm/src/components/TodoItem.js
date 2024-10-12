import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'
import TodoEdit from './TodoEdit'

const TodoItem = ({todo}) => {
  const [showEdit, setShowEdit] = useState(false)
  const {deleteTodoById, toggleTodoCompletedById} = useTodoContext()

  const handleDelete = () => {
    deleteTodoById(todo.id)
  }

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  const handleToggleCompleted = () => {
    toggleTodoCompletedById(todo.id, todo.completed)
  }

  return (
    <div
      className={`flex items-center p-4 bg-white rounded-md space-x-4 
        ${todo.completed ? 'bg-green-100' : ''}
      `}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleCompleted}
        className="h-5 w-5 border-gray-300 rounded"
      />
      
      {/* If we are not editing (!showEdit is true) it shows the todo (if it's completed it has a strikethrough).
        If we are editing (showEdit is true) it shows the form so that the person can edit*/}
      {!showEdit ? 
      (<div className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          <h3 className="text-lg font-semibold">{todo.title}</h3>
          <p className="text-sm text-gray-500">Due Date: {todo.dueDate}</p>
          <p className="text-sm text-gray-500">Type: {todo.type}</p>
          <p className="text-sm text-gray-500">Amount: ${todo.amount}</p>
          {todo.recurring && <p className="text-sm text-green-500">(Recurring)</p>}
        </div>) 
        : (<TodoEdit todo={todo} onSubmit={handleSubmit} />)
      }

      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <div className="ml-4">
          {todo.completed ? (
            <span className="px-3 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
              Completed
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
              Not Completed
            </span>
          )}
        </div>

        {/* Edit and delete buttons */}
        <button
          onClick={handleEdit}
          className="p-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
        >
          {showEdit ? 'Cancel' : 'Edit'}
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
