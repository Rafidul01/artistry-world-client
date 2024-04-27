import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path:"/",
            element: <Home />
        },
        {
          path:"/register",
          element: <Register />
        },
        {
          path:"/login",
          element: <Login />
        },
        {
          path:"/addCraftItem",
          element: <AddCraftItem />
        },
        {
          path: "/allArtAndCraft",
          element: <AllArtAndCraft />,
          loader: () => fetch("http://localhost:5000/crafts")
        }
    ]
  },
]);

export default router;