import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
} from '@nextui-org/react';


const Login = () => {
  

  const handleLogin = () => {
    console.log('Login')
  }
 
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
                {/* <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        
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
                </div> */}
                <div className="my-2">
                  
                    <Button>Create an account</Button>
                  
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

export default Login;
