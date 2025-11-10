import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import MainLayout from "./MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequests from "../Pages/MyFoodRequests";
import AvailableFoods from "../Pages/AvailableFoods";
import FoodDetails from "../Pages/FoodDetails";
import PrivateRoute from "../Authorization/PrivateRoute";
import Loading from "../Components/Loading";




const Root = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "available-foods",
        Component: AvailableFoods,
        loader: ()=> fetch('http://localhost:3000/available-foods'),
        hydrateFallback: <Loading></Loading>
      },
       {
        path: "food-details/:id",
        element: <PrivateRoute>
          <FoodDetails></FoodDetails>
        </PrivateRoute>
      },
  
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "add-food",
        element: <PrivateRoute>
          <AddFood></AddFood>
        </PrivateRoute>,
      },
      {
        path: "manage-foods",
        element: <PrivateRoute>
          <ManageMyFoods></ManageMyFoods>
        </PrivateRoute>,
      },
      {
        path: "food-request",
        element:<PrivateRoute>
           <MyFoodRequests></MyFoodRequests>
        </PrivateRoute>,
      },
    ],
  },
]);

export default Root;
