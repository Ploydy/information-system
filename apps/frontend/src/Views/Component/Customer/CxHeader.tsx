import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const CxHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  
  const handleLogout = () => {
    console.log(`Logout`)
    navigate('/')
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-slate-500">
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
      <Link to="/customer">
        <p className="font-bold text-inherit">Prime Unilum</p>
        </Link>
      </NavbarBrand>
    </NavbarContent>


    <NavbarContent className="hidden sm:flex gap-4" justify="center">

    <NavbarItem>
        <Link color="foreground" to="/customer" >
        Products
        </Link>
      </NavbarItem>
      
      <NavbarItem>
        <Link color="foreground" to="/customer/cart">
        Cart
        </Link>
      </NavbarItem>

      <NavbarItem>
        <Link color="foreground" to="/customer/delivery">
        Delivery Schedule
        </Link>
      </NavbarItem>

    </NavbarContent>

    <NavbarContent justify="end">

      <NavbarItem>
        <Button onClick={handleLogout} variant="flat">
          Logout
        </Button>
      </NavbarItem>

    </NavbarContent>

    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={
              index === 2
                ? "primary"
                : index === menuItems.length - 1
                ? "danger"
                : "foreground"
            }
            className="w-full"
            to="#"
            
          >
            {item}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
}

export default CxHeader