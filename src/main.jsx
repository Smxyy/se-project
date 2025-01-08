import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from './layout/Layout';
import App from './App';
import NotFoundPage from './pages/error/NotFoundPage';
import OtpVerification from './pages/auth/OtpVerification';
import SignIn from './pages/auth/signin';
import SignUp from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgotPassword';
import NewPassword from './pages/auth/NewPassword';
import CardPage from './components/card/CardPage';
import CardKid from './components/cardKid/CardKid';
import BookDetail from './pages/book-detail/BookDetail';
import Contact from './pages/contact/Contact';
import Category from './pages/shop/Category';
import UserAccount from './pages/user-account/UserAccount';
import Settings from './pages/settings/Settings';
import Wishlist from './components/wishlist/WishList';
import Collection from './pages/home/Collection';
import ShopPage from './pages/shop/ShopPage';
import Shop from './pages/shop/Shop';
import Checkout from './components/paymentmethod/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children:[
      {
        path: "/",
        element: <App />,
        children:[
          {
            path: "/:activeRender",
            element: <Collection />,
          }
        ],
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/card",
        element: <CardPage/>,
      },
      {
        path: "/cardkid",
        element: <CardKid/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },

      {
        path: "/book/:bookname",
        element: <BookDetail/>
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        // path: "/shop",
        element: <ShopPage />, 
        children:[
          {
            path: "/shop/:categories",
            element: <Category />,
          }
        ]
      },
    ],
  },
  {
    element: <UserAccount />,
    children: [
      {
        path: "/account/:settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/otpverification",
    element: <OtpVerification />,
  },
  {
    path: "/newpassword",
    element: <NewPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
