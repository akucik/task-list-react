import React from 'react'

//below arrow function
//state updating function(from App com.) can be passed from parent com. via props
// const Form = (props) =>{}, and then in handler fn. write props.setTextInput/or instead of props use const Form = ({setTextInput}) & then no need to pass state update fn through props.
const Form = ({
  textInput,
  setTextInput,
  todos,
  setTodos,
  setFilter,
  filteredItems,
  setFilteredItems,
}) => {
  const textInputHandler = (e) => {
    setTextInput(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      { text: textInput, completed: false, id: Math.random() * 1000 },
    ])
    setTextInput('')
  }

  const filterHandler = (e) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }
  return (
    <form>
      <input
        value={textInput}
        onChange={textInputHandler}
        type="text"
        className="todo-input"
      ></input>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
