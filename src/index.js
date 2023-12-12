import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import "./global.css";





const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  
    {
    path:"/",
    element: <App/>
    }

]);

root.render(
  <RouterProvider router={router}/>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

