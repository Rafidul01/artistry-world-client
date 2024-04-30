import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
//   const navigation = useNavigation();
//   if (navigation.state === "loading") {
//     return <div className='flex justify-center items-center mt-72'>
//     <div><span className="loading loading-infinity w-32 bg-[#973E12]"></span></div>
// </div>;
//   }
  return (
    <div>
      <div className="container mx-auto ">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
