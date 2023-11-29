import { Outlet, createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import AdminLayout from './pages/admin/layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import User from './pages/admin/User';
import UserForm from './pages/admin/UserForm';

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
