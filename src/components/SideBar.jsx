import {  useSelector } from "react-redux";

const SideBar = () => {
  const todos = useSelector((state) => state.todos.todos)
  return (
    <div
      className={`flex w-[340px] bg-gray-100  flex-col gap-4 h-full  py-4 px-4 md:-mt-8`}
    >
      <div className="text-2xl text-center">Hey, ABCD</div>
      <div className="p-4 bg-white flex flex-col rounded-xl">
        <button className="card-item">All Tasks</button>
        <button className="card-item">Today</button>
        <button className="card-item">Completed</button>
        <button className="card-item">HighPriority</button>
        <button className="card-item">Midium Priority</button>
        <button className="card-item">Low Priority</button>
      </div>
      <div className="p-4 flex flex-col gap-4 bg-white rounded-xl">
        <div className="border-b-2 border-gray-200 pb-4">
            <div className="text-xl font-medium">Total Tasks</div>
            <div className="text-xl">{todos.length}</div>
        </div>
        {/* Chart */}
        <div></div>
        {/* chart labe */}
        <div className="flex gap-4 items-center ">
            <div className="rounded-full bg-green-400 size-3 "></div>
            <div>pending</div>
            <div className="rounded-full bg-green-800 size-3"></div>
            <div>done</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
