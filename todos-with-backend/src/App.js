import { useState, useEffect } from 'react'
import axios from 'axios'
import env from "react-dotenv";

import './App.css';
import TodoList from './components/TodoList'
import SearchBar from './components/SearchBar'

function App() {
  const [allTodos, setAllTodos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredTodos, setFilteredTodos] = useState([])

  const fetchTodos = () => {
    axios.get(`${env.BACKEND_URL}/todos`)
    .then((response) => {
      setAllTodos(response.data.todos)
    })
  }
  useEffect(fetchTodos, [])

  const filterTodos = () => {
    const result = allTodos.filter((t) => {
      return t.description.includes(searchTerm)
    })
    setFilteredTodos(result)
  }
  useEffect(filterTodos, [searchTerm, allTodos])
  
  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TodoList allTodos={filteredTodos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
