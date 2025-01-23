import { Navbar } from "../components/Navbar";
import SideBar from "../components/SideBar";
import TaskPanel from "../components/TaskPanel";

const Home = () => {
    

  return (
    <div className="py-2 px-4  sm:px-4 md:px-8 flex flex-col gap-4 ">
      <Navbar></Navbar>
      <div className="flex sm:flex-row flex-col gap-12">
        <div className="md:block md:mt-8 hidden">
          <SideBar></SideBar>
        </div>
        <TaskPanel></TaskPanel>
      </div>
    </div>
  );
};

export default Home;
