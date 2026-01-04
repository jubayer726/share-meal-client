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
import UpdateFoods from "../Pages/UpdateFoods";
import ErrorPage from "../Components/ErrorPage";
import About from "../Components/About";
import Contact from "../Components/Contact";

const Root = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "available-foods",
        Component: AvailableFoods,
        loader: () => fetch("https://share-meal-searver.vercel.app/available-foods"),
        hydrateFallback: <Loading></Loading>,
      },
      {
        path: "food-details/:id",
        Component: FoodDetails,
        // element: (
        //   <PrivateRoute>
        //     <FoodDetails></FoodDetails>
        //   </PrivateRoute>
        // ),
      },
      {
        path: "about-us",
        Component: About,
      },
      {
        path: "contact-us",
        Component: Contact,
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
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "update-food/:id",
        loader: ({ params }) => fetch(`https://share-meal-searver.vercel.app/foods/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateFoods></UpdateFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "food-request",
        element: (
          <PrivateRoute>
            <MyFoodRequests></MyFoodRequests>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Root;
