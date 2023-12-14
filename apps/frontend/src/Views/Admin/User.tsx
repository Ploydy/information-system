import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserResponse } from '@information-system/mylib';
import axios from 'axios';


const User = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);

  const getUsers = async () => {
    //get
    const result = await fetch('http://localhost:4200/api/users');
    const res = await result.json();
    setUsers(res as UserResponse[]);
  };

  useEffect(() => {
    (async () => {
      getUsers();
    })();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`http://localhost:4200/api/users/${id}`);
      if (response.status === 200) {
        getUsers();
      } else {
        console.error(`Failed to delete user with ID ${id}.`);
      }
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  };

  return (
    <>
      <div>
        <h3>User</h3>
      </div>
      <Link to="/Admin/User/new">
        <Button className="btn my-4" >
          Add user
        </Button>
      </Link>
      <table>
        <thead>
          <tr>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Id
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              User
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Email
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Role
            </th>
            <th className="border w-1/5 px-1 py-2 " scope="col">
              Password
            </th>
            <th className="border w-1/5 px-1 py-2" scope="col">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <th className="border px-4 py-2 text-center">{user._id}</th>
              <td className="border px-4 py-2 text-center">{user.fullName}</td>
              <td className="border px-4 py-2 text-center">{user.email}</td>
              <td className="border px-4 py-2 text-center">{user.role}</td>
              <td className="border px-4 py-2 text-center">{user.password}</td>
              <td className="border px-4 py-2 text-center">
                <Link to={`/Admin/User/${user._id}`}>
                  <Button
                    className="btn bg-green-400 mx-2"
                  >
                    Update
                  </Button>
                </Link>
                <Button
                  className="text-slate-950 capitalize bg-red-500"
                  color="danger"
                  variant="bordered"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
