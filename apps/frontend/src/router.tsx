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
        element: <Overview />
      },
      {
        path: '/admin/email',
        element: <Email />
      },
      {
        path: '/admin/feedback',
        element: <Feedback />
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
    element: <Register />
  }
]);
export default router;
