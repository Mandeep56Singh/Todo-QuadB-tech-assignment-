import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

import {
  addTodo,
  deleteTodo,
  toggleComplete,
  updatePriority,
} from "../store/slice/todoSlice";


const TaskPanel = () => {
 
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
 console.log(todos)
  const handleTaskAdd = (title, priority) => {
    dispatch(addTodo({ title, priority }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id,completed) => {
    dispatch(toggleComplete({id,completed}));
  };

  const handlePriorityChange = (id, priority) => {
    dispatch(updatePriority({ id, priority }));
  };
  return (
    <div className="w-full">
      <AddTodo onAddTask={handleTaskAdd} />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`${
              index + 1 === todos.length
                ? "border-b-0"
                : "border-b-2 border-gray-300"
            }`}
          >
            <Todo
              {...todo}
              onComplete={handleComplete}
              onPriorityChange={handlePriorityChange}
              onRemove={handleDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPanel;
