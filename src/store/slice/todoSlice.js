// src/store/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadInitialState = () => {
  const savedTodos = localStorage.getItem("persist:root");
  return savedTodos
    ? []
    : [
        {
          id: "341",
          title: "Finish Project Report",
          completed: false,
          priority: "Low",
        },
        {
          id: "342",
          title: "Finish Project ",
          completed: true,
          priority: "Low",
        },
        {
          id: "34",
          title: "Finish  Report",
          completed: false,
          priority: "Low",
        },
      ];
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: loadInitialState(),
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: uuidv4(),
        title: action.payload.title,
        completed: false,
        priority: action.payload.priority,
        createdAt: new Date().toISOString(),
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const { id, completed } = state.todos.find(
        (todo) => todo.id === action.payload
      );
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.completed = completed;
    },
    updatePriority: (state, action) => {
      const { id, priority } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.priority = priority;
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, updatePriority } =
  todoSlice.actions;
export default todoSlice.reducer;
