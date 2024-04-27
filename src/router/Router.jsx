import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import Chackout from "../pages/cheackout/Chackout";

const router= createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path:"/cheakout/:id",
          element:<Chackout/>,
          loader:({params})=> fetch(`http://localhost:3000/services/${params.id}`)
        }
      ]
    },
  ]);
  export default router;
