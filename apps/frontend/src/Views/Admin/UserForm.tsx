import { Button, Card, Input } from '@nextui-org/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { CreateUserDto, UpdateUserDto } from '@information-system/mylib';
import { UserRequest, UserResponse } from '@information-system/mylib';

const UserForm = (props: any) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    register,
    setValue,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<UserResponse>();

  const handleSave = async (user: UserResponse) => {
    const request: UserRequest = {
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      password: user.password,
    };
     try {
      if (id) {
        await axios.put<UpdateUserDto>(`http://localhost:4200/api/users/${id}`, request)
      } else {
        await axios.post<CreateUserDto>('http://localhost:4200/api/users/new', request)
      }
      navigate('/admin/user')
     } catch (error) {
      console.log(error)
     }
   
  };

  // getting data
  useEffect(() => {
    axios
      .get<UserRequest>('http://localhost:4200/api/users/' + id)
      .then(res => {
        setValue('fullName', res.data.fullName);
        setValue('email', res.data.email);
        setValue('role', res.data.role);
        setValue('password', res.data.password);
      })
      .catch(err => console.log(err));
  }, [id, setValue]);

  return (
    <div className="container card">
      <div className="form-title text-center">
        <h2 className="text-dark">{!id ? 'New' : 'Update'} User</h2>
        <span className="">
          Use the below form to {!id ? 'create a new' : 'update a'} user
        </span>

        <form method="POST">
          <div className="my-10 ">
            <Card className="max-w-md px-5 pt-5 ">
              <Input
                placeholder="Fullname"
                type="text"
                {...register('fullName')}
              />

              <Input placeholder="Email" type="text" {...register('email')} />

              <Input placeholder="Role" type="text" {...register('role')} />

              <Input
                placeholder="Password"
                type="password"
                {...register('password')}
              />

              <Button
                className="my-4 rounded-xl bg-slate-600 text-slate-50 "
                onClick={handleSubmit(handleSave)}
              >
                {!id ? 'Add' : 'Update'} User
              </Button>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
