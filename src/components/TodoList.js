import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, setTodos, filteredItems }) => {
  console.log(filteredItems)
  return (
    <div className="todo-container">
      <ul>
        {filteredItems.map((todo) => (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
