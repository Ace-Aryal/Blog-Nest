import React from "react";
import { Container, Logo, LogoutButton } from "../index";
import { useNavigate, Link } from "react-router";
import { useSelector } from "react-redux";
import { Button } from "@mantine/core";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto gap-1">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <Button
                    onClick={() => navigate(item.slug)} // alt to link
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </Button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
