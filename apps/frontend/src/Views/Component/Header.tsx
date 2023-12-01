import React from "react";
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

const Header = () => {
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
          {/* <link href="/Admin"> */}
            <p className="font-bold text-inherit">Prime Unilum</p>
            {/* </link> */}
          </NavbarBrand>
        </NavbarContent>


        <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <NavbarItem>
            <Link color="foreground" to="/Admin" >
            Dashboard
            </Link>
          </NavbarItem>
          
          <NavbarItem>
            <Link color="foreground" to="/Admin/Overview">
            Overview
            </Link>
          </NavbarItem>

         

          <NavbarItem>
            <Link color="foreground" to="/Admin/User">
            Users
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/Admin/Email">
            Email
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/Admin/Feedback">
            Feedback
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
              {/* <link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </link> */}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
  );
};

export default Header;
