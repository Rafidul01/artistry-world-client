import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  console.log(user);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else setTheme("light");

    console.log(e.target.checked);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Loged out Successful!");
      })
      .catch(() => {
        toast.success("Logout failed");
      });
  };

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
          to="/addCraftItem"
        >
          Add Craft Item
        </NavLink>
      </li>
      <li className="hover:text-[#973E12]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border border-[#973E12] text-[#973E12] font-bold" : ""
          }
          to={`/myArtAndCraft/${user.email}`}
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 p-0 my-4 border-b-2 rounded-xl px-2 shadow-lg">
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
        {user ? (
          <>
            <div
              className="avatar hover:tooltip hover:tooltip-open hover:tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="w-6 md:w-8 mr-2 md:mr-4 rounded-full ring ring-[#973E12] ring-offset-base-100 ring-offset-2 ">
                <img src={user.photoURL} />
              </div>
            </div>
            <Link
              onClick={handleLogOut}
              className="btn bg-[#973E12]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              LogOut
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#973E12]  text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className=" hidden md:flex ml-2 btn bg-[#973E12] text-white font-poppins rounded-3xl min-h-0 h-10 md:min-h-[3rem] md:h-[3rem]"
            >
              Register
            </Link>
          </>
        )}

        <div></div>
        {/* theme */}
        <label className="cursor-pointer grid place-items-center ml-2 ">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark" ? true : false}
            className="toggle theme-controller bg-[#973E12] row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100 "
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100  "
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
