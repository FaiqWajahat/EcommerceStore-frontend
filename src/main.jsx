import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { CartProvider } from './components/Context/Cart'

import ProductsDisplay from './Pages/ProductsDisplay.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Profile from './Pages/Profile.jsx'
import Collection from './Pages/Collection.jsx'
import Checkout from "./Pages/Chectout.jsx"
import User from './Layout/User.jsx'

import OrderDetails from './Pages/OrderDetails.jsx'
import Search from './Pages/Search.jsx'

import PaymentSuccess from './Pages/PaymentSuccess.jsx'
import PaymentFailed from './Pages/PaymentFailed.jsx'

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <User />, // Wrap all pages in a Layout with Header & Footer
    children: [
      { index: true, element: <Home /> }, // Home page
      { path: "user", element: <User /> },
      { path: ":gender/:wear/:sku", element: <ProductsDisplay /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "profile", element: <Profile /> },
      { path: "collection/:gender", element: <Collection /> },
      { path:"checkout" , element:<Checkout/>},
     
      { path:"/orderDetails/:id", element:<OrderDetails/>},
      { path:"/search" , element:<Search/>},
      {path:"/paymentSuccess", element:<PaymentSuccess/>},
        {path:"/paymentFailed", element:<PaymentFailed/>},
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Toaster/>
    <RouterProvider router= {allRoutes}/>
    </CartProvider>
  </StrictMode>,
)
