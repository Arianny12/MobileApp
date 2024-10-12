import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoEdit = ({todo, onSubmit}) => {
  const [title, setTitle] = useState(todo.title)
  const [dueDate, setDueDate] = useState(todo.dueDate)
  const [type, setType] = useState(todo.type)
  const [amount, setAmount] = useState(todo.amount)
  const [recurring, setRecurring] = useState(todo.recurring)
  const {editTodoById} = useTodoContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, {title, dueDate, type, amount, recurring})
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 rounded-md shadow-md space-y-2">
      <div>
        <label className="text-gray-700">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="text-gray-700">Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="text-gray-700">Type:</label>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Bill">Bill</option>
          <option value="Subscription">Subscription</option>
          <option value="Debt Repayment">Debt Repayment</option>
        </select>
      </div>

      <div>
        <label className="text-gray-700">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={recurring}
          onChange={(event) => setRecurring(event.target.checked)}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="text-gray-700">Recurring</label>
      </div>

      <button className="w-full p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Update Task
      </button>
    </form>
  )
}

export default TodoEdit
