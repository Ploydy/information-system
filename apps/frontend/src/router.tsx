import { Outlet, createBrowserRouter } from 'react-router-dom';

// main component
import Login from './Views/Login';
import Register from './Views/Account/Register';
// end main component

// start admin
import AdminLayout from './Views/Layout/AdminLayout';
import Dashboard from './Views/Admin/Dashboard';
import User from './Views/Admin/User';
import UserForm from './Views/Admin/UserForm';
import Overview from './Views/Admin/Overview';
import Email from './Views/Admin/Email';
import Feedback from './Views/Admin/Feedback';
import Products from './Views/Admin/Products';
// end admin

// sec start
import SecretaryLayout from './Views/Layout/SecretaryLayout';
// end sec

// start emp
import EmployeeLayout from './Views/Layout/EmployeeLayout';
// end emp

// start cx
import CustomerLayout from './Views/Layout/CustomerLayout';
import CxProducts from './Views/Admin/Customer/CxProducts';
import Delivery from './Views/Admin/Customer/Delivery';
import Cart from './Views/Admin/Customer/Cart';
import ProductForm from './Views/Admin/ProductForm';
// end cx

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {   // admin start
    path: '/admin',   
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: '/admin/overview',
        element: <Overview />,
      },
      {
        path: '/admin/email',
        element: <Email />,
      },
      {
        path: '/admin/feedback',
        element: <Feedback />,
      },
      {
        path: '/admin/products',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Products />,
          },
          {
            path: 'new',
            element: <ProductForm />,
          },
          {
            path: ':id',
            element: <ProductForm />,
          }
        ]
      },
      {
        path: '/admin/user',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <User />,
          },
          {
            path: 'new',
            element: <UserForm />,
          },
          {
            path: ':id',
            element: <UserForm />,
          },
        ],
      },
    ], // end admin
  },
  
  {  // sec start
    path: '/secretary', 
    element: <SecretaryLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: '/secretary/email',
        element: <Email />,
      },
      {
        path: '/secretary/feedback',
        element: <Feedback />,
      },
    ], // end sec
  },
  { // start employees
    path: '/employee',
    element: <EmployeeLayout />, 
    children: [
      {
        path: '',
        element: <Dashboard />,
      }, 
    ], // end employee
  },
  { // start cx
    path: '/customer',
    element: <CustomerLayout />,
    children: [
      {
        path: '',
        element: <CxProducts />,
      },
      {
        path: '/customer/cart',
        element: <Cart />,
      },
      {
        path: '/customer/delivery',
        element: <Delivery />
      },
    ],   // end cx
  },

]);
export default router;
