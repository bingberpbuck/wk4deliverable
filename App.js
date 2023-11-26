import TodoForm from "./components/TodoForm";
import React from "react";
import "./App.css";
import {useState} from "react";
import logo from './logo.svg';
import TodoList from "./components/TodoList";


function App() {
  const[todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos]);

  }


 
  function toggleComplete(id) {
    let newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
    setTodos(newTodos); 
    console.log(newTodos)
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id != id)
         setTodos(newTodos)
         console.log(newTodos)
      }
    

  return (
      <div className = "App">
          <header className = "App-header">
              <p>React Todo</p>
              <TodoForm addTodo={addTodo}/>
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
              />
          </header>
      </div>
  );
}


export default App;