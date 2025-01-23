import { Navbar } from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="py-2 px-8 ">
      <Navbar></Navbar>
      <div className="flex md:flex-col gap:4">
        <div className="md:block md:mt-8 hidden">
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
}

export default App;
