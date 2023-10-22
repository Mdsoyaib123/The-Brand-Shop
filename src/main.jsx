import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Roots/MainRoot';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './ContextApi/AuthProvider';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BrandProducts from './components/BrandProducts/BrandProducts';
import ViewDetelis from './components/ViewDetelis/ViewDetelis';
import Update from './components/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/brands/:brandName',
        element: <BrandProducts></BrandProducts>,
        loader: ({params})=>fetch(`http://localhost:5000/brands/${params.brandName}`)
        
      },{
        path:'/detelis/:name',
        element: <ViewDetelis></ViewDetelis>,
        loader: ({params})=>fetch(`http://localhost:5000/detelis/${params.name}`)
        
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      loader: ()=>fetch(`http://localhost:5000/cart`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/brand/:name',
        element: <Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/brand/${params.name}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
  </React.StrictMode>,
)
