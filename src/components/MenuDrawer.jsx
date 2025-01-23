import PropTypes from "prop-types";

import { IoMdClose } from "react-icons/io";
import SideBar from "./SideBar";
export const MenuDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transform fixed top-0 left-0 flex flex-col z-50 bg-gray-200 p-4  h-full transition-transform duration-800 ease-in `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-2xl size-8 ml-auto "
      >
        <IoMdClose />
      </button>
      <SideBar></SideBar>
    </div>
  );
};

MenuDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuDrawer;
