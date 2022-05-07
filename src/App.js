import React, { useState, useEffect } from 'react'
import './App.css'
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  //state stuff
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  //useEffect
  useEffect(() => {
    filterItemsHandler()
  }, [todos, filter])

  //functions

  const filterItemsHandler = () => {
    switch (filter) {
      case 'completed':
        setFilteredItems(todos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredItems(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredItems(todos)
        break
    }
  }

  //save to local storage

  return (
    <div className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setTextInput={setTextInput}
        textInput={textInput}
        setFilter={setFilter}
      />
      <TodoList
        filteredItems={filteredItems}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  )
}

export default App
