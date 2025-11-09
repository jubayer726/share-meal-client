import React from 'react';
import { createBrowserRouter } from 'react-router';

import Home from '../Pages/Home';
import MainLayout from './MainLayout';
import AvailableFoods from '../Pages/AvailableFoods';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AddFood from '../Pages/AddFood';
import ManageMyFoods from '../Pages/ManageMyFoods';
import MyFoodRequests from '../Pages/MyFoodRequests';

const Root = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: 'available-foods',
            Component: AvailableFoods
        },
         {
            path: 'login',
            Component: Login
        },
         {
            path: 'register',
            Component: Register
        },
        {
            path: 'add-food',
            element: <AddFood></AddFood>
        },
        {
            path: 'manage-foods',
            element: <ManageMyFoods></ManageMyFoods>
        },
        {
            path: 'food-request',
            element: <MyFoodRequests></MyFoodRequests>
        },
    ]
  },
]);


export default Root;