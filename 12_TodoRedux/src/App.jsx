import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import Todobox from "./components/Todobox";
import { useEffect } from "react";
import { getTodoFromLocal, setTodoInLocal } from "./features/TodoSlice";
import EditTodobox from "./components/EditTodobox";

function App() {
  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();
  console.log(todos);

  useEffect(() => {
    dispatch(getTodoFromLocal());
  }, []);

  useEffect(() => {
    dispatch(setTodoInLocal());
  }, [todos]);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* TodoForm goes here */}
            <TodoForm /> 
            {/* <br /> <EditTodobox/> */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* for performace inhence we created a div rither returing direct todoBox */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todobox todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
