import {useState} from 'react'
const TodoEdit =(props) => {
    const {todo,onSubmit} = props
    const [title,setTitle] = useState(todo.title)
    
    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        //onsubmit needs to hide the edit form and update the
        onSubmit(todo.id,title)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <imput onChnage={handleChange} value={title} />
            <button>Update</button>
        </form>
    )
}
export default TodoEdit