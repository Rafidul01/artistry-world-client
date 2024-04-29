import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import AllArtAndCraft from "../pages/AllArtAndCraft/AllArtAndCraft";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MyArtAndCraft from "../pages/MyArtAndCraft/MyArtAndCraft";
import UpdateCrafts from "../pages/UpdateCrafts/UpdateCrafts";
import PrivateRoute from "./PrivateRoute";
import Category from "../pages/Category/Category";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error/> ,
    children: [
        {
            path:"/",
            element: <Home />,
            loader: () => fetch("http://localhost:5000/crafts")
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
          element: <PrivateRoute><AddCraftItem /></PrivateRoute>
        },
        {
          path: "/allArtAndCraft",
          element: <AllArtAndCraft />,
          loader: () => fetch("http://localhost:5000/crafts")
        },
        {
          path: "/craftDetails/:id",
          element: <PrivateRoute><ViewDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
          path:"/myArtAndCraft/:email",
          element: <PrivateRoute><MyArtAndCraft/></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/crafts/user/${params.email}`)
        },
        {
          path:"/update/:id",
          element: <PrivateRoute><UpdateCrafts/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
        },
        {
          path:"/categories/:subcategory_name",
          element: <Category />,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.subcategory_name}`)
        }
    ]
  },
]);

export default router;