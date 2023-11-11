import React from "react";
import { LogoutBtn, Container, Logo } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigation = useNavigate();

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
      name: "Sign UP",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All-Post",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add-Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo className={" bg-black text-white p-3 m-0 rounded-md hover:bg-white hover:text-black duration-700"} />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems?.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigation(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
