import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Todos: [
    {
      id: nanoid(),
      todo: "work now",
      completed: false,
    },
  ],
  EditTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false,
      };
      state.Todos.push(todo);
    },
    updateTodo: (state, action) => {
      const { id } = action.payload;
      state.Todos = state.Todos.map((testTodo) =>
        testTodo.id === id
          ? { ...testTodo, todo: action.payload.todo }
          : testTodo
      );
      state.EditTodo = null;
    },
    delTodo: (state, action) => {
      const id = action.payload;
      state.Todos = state.Todos.filter((todo) => todo.id !== id);
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      state.Todos = state.Todos.map((testTodo) =>
        testTodo.id === id
          ? { ...testTodo, completed: !testTodo.completed }
          : testTodo
      );
    },
    getTodoFromLocal: (state) => {
      try {
        const notes = JSON.parse(localStorage.getItem("notes"));
        state.Todos = notes || state.Todos || [];
      } catch (error) {
        // user someTime try to manuplate their own localstorage
        console.log(error.msg);
      }
    },

    setTodoInLocal: (state) => {
      localStorage.setItem("notes", JSON.stringify(state.Todos));
      // localStorage.setItem("notes", JSON.stringify([...state.Todos]));
      // console.log(state.Todos);
    },
    setEditTodo: (state, action) => {
      state.EditTodo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  updateTodo,
  delTodo,
  toggleCompleted,
  getTodoFromLocal,
  setTodoInLocal,
  setEditTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
