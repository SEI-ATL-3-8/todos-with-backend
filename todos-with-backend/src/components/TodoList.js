import axios from "axios"
import env from "react-dotenv";

const TodoList = (props) => {
  return (
    <ul>
    {props.allTodos.map((todo) => {
      return <li key={todo.id}>
        {todo.description}
        {todo.completed ? 
        <span>done!</span>
        :
        <button
          onClick={() => {
            axios.put(`${env.BACKEND_URL}/todos/${todo.id}`, { completed: true })
            .then(() => { props.fetchTodos() })
          }}
        >Mark complete</button>
        }
      </li>
    })}
  </ul>
  )
}

export default TodoList
