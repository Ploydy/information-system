import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

export default function Login (props:any)  {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['Easy access Login']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(`login ${selectedValue}`);
    if (selectedValue === "admin") {
      navigate("/Admin");
    }
    if (selectedValue === "employee") {
      navigate("/Employee");
    }
    if (selectedValue === "secretary") {
      navigate("/Secretary");
    }
    if (selectedValue === "customer") {
      navigate("/customer");
    }
    if (selectedValue === "State") {
      alert("incorrect Credentails Please choose one on state below! ");
    }
  };

  return (
    <div>
      <div className="px-4 py-40 mx-auto sm:px-6 lg:px-8 max-w-7x1">
        <div className="max-w-lg mx-auto text-center">
          <Card
            className="pt-4 pb-4 px-8 bg-transparent"
            style={{ border: 'solid' }}
          >
            <h1 className="text-tiny uppercase font-bold">Login</h1>
            <CardBody>
              <Input
                className="py-1"
                type="email"
                name="email"
                placeholder="Email"
              />

              <Input
                className="py-1 "
                type="password"
                name="password"
                placeholder="Password"
              />
              <Checkbox className="py-4">Remember me</Checkbox>

              <div className="mx-0 my-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                    {...props}
                  >
                    <DropdownItem key="admin">Admin</DropdownItem>
                    <DropdownItem key="employee">Employee</DropdownItem>
                    <DropdownItem key="secretary">Secretary</DropdownItem>
                    <DropdownItem key="customer">Customer</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <div className="my-2">
                  <Link to="/register">
                    <Button>Create an account</Button>
                  </Link>
                </div>
              </div>
              <Button onClick={handleLogin}>Login</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};


