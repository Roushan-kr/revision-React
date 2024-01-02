import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, setEditTodo, setTodoInLocal } from "../features/TodoSlice";

function EditTodobox() {
  const dispatch = useDispatch();

  // Use a more descriptive variable name instead of 'data'
  const editTodoData = useSelector((state) => state.EditTodo);

  // Use destructuring to get 'todo' from 'editTodoData'
  const [todo, setTodo] = useState(editTodoData);

  const handleTodoChange = (e) => {
    setTodo({ ...todo, todo: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setEditTodo(todo));
    dispatch(updateTodo(todo));
    dispatch(setTodoInLocal())
  };

  useEffect(() => {
    // Update 'todo' state when 'editTodoData' changes
    setTodo(editTodoData);
  }, [editTodoData]);

  // Use a more explicit check for 'todo' existence
  return todo ? (
    <form className="flex" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo.todo}
        onChange={handleTodoChange}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Update Todo
      </button>
    </form>
  ) : null;
}

export default EditTodobox;
