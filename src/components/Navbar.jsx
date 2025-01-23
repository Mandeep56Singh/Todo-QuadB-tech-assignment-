import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { MdMenu, MdOutlineLightMode } from "react-icons/md";
import MenuDrawer from "./MenuDrawer";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className={`${isOpen ? "block" : "hidden"}`}
      >
        <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen}></MenuDrawer>
      </div>
      <div className="  flex justify-between  items-center relative">
        <div className="flex gap-4">
          <button
            className="md:hidden block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdMenu className="text-3xl"></MdMenu>
          </button>
          <div className="flex gap-1 items-center">
            <FaReact className="text-green-800 text-3xl "></FaReact>
            <div className="text-green-800 text-3xl font-medium">DoIt</div>
          </div>
        </div>
        <div className="flex gap-4">
          <button>
            <CiSearch className="text-3xl"></CiSearch>
          </button>
          <button>
            <MdOutlineLightMode className="text-3xl "></MdOutlineLightMode>
          </button>
        </div>
      </div>
    </div>
  );
};
