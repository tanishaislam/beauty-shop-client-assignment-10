import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Header from './Components/Home/Header';
import Login from './Components/LogReg/Login';
import ErrorPage from './Components/Home/ErrorPage';
import Register from './Components/LogReg/Register';
import AuthProviders from './firebase/Providers/AuthProviders';
import AddProduct from './Components/Product/AddProduct';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';
import AllProducts from './Components/Product/AllProducts';

const createMainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Header></Header>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/addProduct',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path:'/add',
        element: <AllProducts></AllProducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProviders>
  <RouterProvider router={createMainRouter} />
  </AuthProviders>
</React.StrictMode>
)
