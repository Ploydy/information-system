import { Outlet, createBrowserRouter } from 'react-router-dom';

import Login from './Views/Login';
import AdminLayout from './Views/Layout/AdminLayout';
import Dashboard from './Views/Admin/Dashboard';
import User from './Views/Admin/User';
import UserForm from './Views/Admin/UserForm';
import Register from './Views/Account/Register';
import Overview from './Views/Admin/Overview';
import Email from './Views/Admin/Email';
import Feedback from './Views/Admin/Feedback';
import SecretaryLayout from './Views/Layout/SecretaryLayout';
import EmployeeLayout from './Views/Layout/EmployeeLayout';
import CustomerLayout from './Views/Layout/CustomerLayout';
import Products from './Views/Admin/Customer/Products';
import Cart from './Views/Admin/Customer/Cart';
import Delivery from './Views/Admin/Customer/Delivery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
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
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
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
    ],
  },
  {
    path: '/employee',
    element: <EmployeeLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      }, 
    ],
  },
  {
    path: '/customer',
    element: <CustomerLayout />,
    children: [
      {
        path: '',
        element: <Products />,
      }, 
      {
        path: '/customer/cart',
        element: <Cart />,
      },
      {
        path: '/customer/delivery',
        element: <Delivery />
      },
    ],
  },

]);
export default router;
