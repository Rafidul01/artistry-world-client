import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
