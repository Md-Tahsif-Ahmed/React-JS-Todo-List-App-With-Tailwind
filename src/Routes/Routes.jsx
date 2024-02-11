import {
    createBrowserRouter,
   
  } from "react-router-dom";
 

import Home from "../Pages/Components/Home";
import App from "../Pages/Components/App";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <App></App>
        },
        
      ]
    }
  ]);

export default router;