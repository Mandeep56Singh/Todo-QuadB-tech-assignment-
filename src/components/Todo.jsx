import PropTypes from "prop-types";

import { MdOutlineDeleteOutline } from "react-icons/md";
const Todo = ({
  id,
  title,
  completed,
  priority,
  onComplete,
  onPriorityChange,
  onRemove,
}) => {
  return (
    <div className="flex items-center py-6  justify-between ">
      <div className="flex gap-4 items-center w-[320px]">
        <input
          type="checkbox"
          value={completed}
          onChange={(e) => onComplete(id, e.target.checked)}
          className="size-4 "
        />
        <div className="text-lg truncate">{title}</div>
      </div>
      <div className="flex gap-2">
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={(e) => onPriorityChange(id, e.target.value)}
          className={`px-2 py-1 rounded-lg border-2 transition-all
    focus:outline-none focus:ring-2 focus:ring-opacity-50 appearance-none ${
      priority === "High"
        ? "border-red-200 bg-red-50 focus:ring-red-300 text-red-700"
        : priority === "Medium"
        ? "border-yellow-200 bg-yellow-50 focus:ring-yellow-300 text-yellow-700"
        : "border-green-200 bg-green-50 focus:ring-green-300 text-green-700"
    }`}
        >
          <option
            value="High"
            className="bg-red-50 text-red-700 hover:bg-red-100"
          >
            High
          </option>
          <option
            value="Medium"
            className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100"
          >
            Medium
          </option>
          <option
            value="Low"
            className="bg-green-50 text-green-700 hover:bg-green-100"
          >
            Low
          </option>
        </select>
        <button onClick={() => onRemove(id)}>
          <MdOutlineDeleteOutline className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  priority: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onPriorityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Todo;
