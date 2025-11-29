import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from '../../pages/Root/Root';
import Error from '../../pages/Root/Error/Error';
import Home from '../../pages/Home/Home';
import AllApps from '../../pages/AllApps/AllApps';
import AppDetails from '../../pages/AppDetails/APpDetails';
import Installation from '../../pages/Installation/Installation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home
      },
      {

        path: "apps",
        Component: AllApps
      },
      {

        path: "apps/:id",
        Component: AppDetails
      },
      {
        path: "installation",
        Component: Installation
      }
    ]
  },
]);



