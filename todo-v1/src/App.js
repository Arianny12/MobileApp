import {useState} from 'react'
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'

const App = () => {
  const [todos,setTodos] = useState([])

  const createTodo = (title) => {
    // console.log("creating todo", title)
    const updatedTodos = [
      ...todos,
      //when the key and value are identical, you can just say the key once
      {id: Math.round(Math.random()*999999), title},
    ]
    setTodos(updatedTodos)
  }

const deleteTodoById = (id) => {
  //look at the array, find the matching id and remove it
  //filter returns a copy
  const updatedTodos = todos.filter((todo)=>{
    return todo.id !== id
  })
  setTodos(updatedTodos)
}
const editTodoById = (id,newTitle) => {
  const updatedTodos = todos.map((todo)=>{
    //if this ID match this is the one to update it
    if(todo.id === id){
      //copy old values, then add new values
      return{...todo, title: newTitle}
    }
    //otherwise return the untouched the untoched todo
    return todo
  })
  // set our state here, and pass it all the way back down...
  setTodos(updatedTodos)
}
return(
  <div>
    {todos.length}
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById}/>
  </div>
  )
}

export default App
