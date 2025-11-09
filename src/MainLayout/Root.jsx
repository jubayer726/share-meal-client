import React from 'react';
import { createBrowserRouter } from 'react-router';

import Home from '../Pages/Home';
import MainLayout from './MainLayout';
import AvailableFoods from '../Pages/AvailableFoods';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

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
        }
    ]
  },
]);


export default Root;