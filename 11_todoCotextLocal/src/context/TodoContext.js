import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  updateTodo: (id, todo) => {},
  addTodo: (todo) => {},
  delTodo: (id) => {},
  toggleComplete: (id) => {}
  // saveonline: async (Todos)=>{
  //   // network calls with let us to reduce network request
  //   resolve("sucess")
  // }
});

export const TodoProvider = TodoContext.Provider;

// arrow function need const not default?
export const useTodo = () => {
  return useContext(TodoContext);
};

// another way
/**
 * // using Custom hooks for variable management
export default function useTodo() {
    return useContext(TodoContext)
}
 */
