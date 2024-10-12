import {useState} from 'react'
import useTodoContext from '../hooks/use-todo-context'

const TodoCreate = () => {
  const {createTodo} = useTodoContext()
  const [title, setTitle] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [type, setType] = useState('Bill')
  const [amount, setAmount] = useState('')
  const [recurring, setRecurring] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo({title, dueDate, type, amount, recurring})
    setTitle('')
    setDueDate('')
    setType('Bill')
    setAmount('')
    setRecurring(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div>
        <label className="text-gray-700">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter task title"
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
          placeholder="Enter amount"
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
        Add Task
      </button>
    </form>
  )
}

export default TodoCreate
