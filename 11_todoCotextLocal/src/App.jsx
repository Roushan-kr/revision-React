import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import {Todoforms, TodoBox } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, { ...todo, id:  Date.now() }]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((testTodo) => (testTodo.id === id ? todo : testTodo))
    );
  };
  const delTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.filter((testTodo) => (testTodo.id !== id))
    );
  };
  const toggleComplete=(id)=>{
    setTodos((prevTodo)=>(prevTodo.map((testTodo)=>testTodo.id === id ? {...testTodo, "completed":!testTodo.completed }: testTodo)))
  }  

  useEffect( () => {
    const todosList =JSON.parse(localStorage.getItem("todo-list"))
    if (todosList && todosList.length) {
      setTodos(todosList)
    }

  }, [])
  
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos))

    // saveonline(todos)
  }, [todos])
  

  return (
    <TodoProvider
      value={{ todos, updateTodo, delTodo, addTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* TodoForm goes here */}
            <Todoforms/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* for performace inhence we created a div rither returing direct todoBox */}
            {todos.map((todo)=>(
            <div key={todo.id} className="w-full">
            <TodoBox key={todo.id} todo={todo}/>
            </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
