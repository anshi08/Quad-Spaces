import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import App from './App.jsx';
import './index.css'
import Home from './Home/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
      {/* Add another route for "/p/1" pointing to the Home component */}
      <Route path="/p/1" element={<Home />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
