import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:text-[#973E12]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-[#973E12]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
          }
          to="/allArtAndCraft"
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li className="hover:text-[#973E12]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
          }
          to="/addArtAndCraft"
        >
          Add Craft Item
        </NavLink>
      </li>
      <li className="hover:text-[#973E12]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
          }
          to="/myArtAndCraft"
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#9EA18E] font-lato"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl md:text-3xl text-start p-0 font-lato text-[#9EA18E] font-normal"
        >
          <span className="text-[#973E12]">Artistry</span> World
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#9EA18E] font-thin">
          {links}
        </ul>
      </div>
      <div className="navbar-end font-lato">
        <Link
          to="/login"
          className="btn bg-[#973E12]  text-white font-poppins rounded-lg min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
        >
          Login
        </Link>
        <Link
          to="/register"
          className=" hidden md:flex ml-2 btn bg-[#973E12] text-white font-poppins rounded-lg min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
