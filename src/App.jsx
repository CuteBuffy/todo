import Form from './components/Form/Form.jsx'
import './components/Form/Form.css'
import './App.css'
import { useState } from 'react'

function App() {

  const [todos, setTodos] = useState([])

  const putTodo = value => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: value,
          done: false
        }
      ])
    } else {
      alert("Enter Something To Do!")
    }
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleDone = id => {
    setTodos(todos.map(todo => ({
      ...todo,
      done: todo.id === id ? !todo.done : todo.done
    })))
  }

  const todoElem = todos.map(todo => {
    return (
      <>
        <div className="todo">
          <input
            key={todo.id}
            type="checkbox"
            checked={todo.done}
            onChange={() => {
              toggleDone(todo.id)
            }}
            id={todo.id}
          />
          <label style={{ textDecoration: todo.done ? "line-through" : "none" }} className='todo__text' htmlFor={todo.id}>{todo.text}</label>
          <button onClick={() => {
            deleteTodo(todo.id)
          }} className='todo__delete btn'>
            <img src="./icons/trash.svg" alt="" />
          </button>
        </div>
      </>
    );
  })

  return (
    <>
      <div className="page__wrapper">
        <div className="container todo__container">
          <div className="todo__wrapper">
            <h1 className="input__title">things to do</h1>
            <div className="todo__main">
              <Form
                putTodo={putTodo}
              />
              {todos.length > 0 ? <div className="todos__container">
                {todoElem}
              </div> : <p className='todo__empty'>Empty :(</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
