import { Outlet, createBrowserRouter } from 'react-router-dom';

import Login from './Views/Login';
import AdminLayout from './Views/Layout/AdminLayout';
import Dashboard from './Views/Admin/Dashboard';
import User from './Views/Admin/User';
import UserForm from './Views/Admin/UserForm';

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
]);
export default router;
