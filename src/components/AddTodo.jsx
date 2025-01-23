// AddTodo.jsx
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    dispatch(
      addTodo({
        title: taskTitle,
        priority,
      })
    );
    setTaskTitle("");
    setPriority("Medium");
    setOpen(false);
  };

  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4 items-stretch">
      <div className="text-2xl text-gray-400">Add a Task</div>
      <div className="flex justify-between items-center">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="Button">ADD TASK</button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl focus:outline-none data-[state=open]:animate-contentShow w-[90vw] max-w-md">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-xl font-semibold text-gray-800">
                  Add New Task
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    className="text-gray-500 hover:text-gray-700 rounded-full p-1"
                    aria-label="Close"
                  >
                    <IoMdClose className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description className="mb-6 text-gray-600">
                Enter task details below
              </Dialog.Description>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Task Title
                    </label>
                    <input
                      type="text"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter task description"
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Priority
                    </label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="px-4 py-2 text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                  </Dialog.Close>
                  <button
                    type="submit"
                    className="Button"
                    disabled={!taskTitle.trim()}
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default AddTodo;
