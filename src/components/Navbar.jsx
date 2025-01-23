import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/slice/authSlice";
import MenuDrawer from "./MenuDrawer";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="relative">
      <div className={`${isOpen ? "block" : "hidden"}`}>
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
          <button onClick={handleLogout}>
            <IoMdExit className="text-3xl "></IoMdExit>
          </button>
        </div>
      </div>
    </div>
  );
};
