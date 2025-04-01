import { Avatar, Dropdown, Navbar, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "flowbite-react";
// import { FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "../../redux/user/userSlice";
import logo from "./ImageXpert.png";
import "./Header.css"

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <Navbar className="Nevbar">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white h-50"
      >
        <img src={logo} alt="logoimg" className="navbarlogo pl-4"/>
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color={"gray"} pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <>
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
                <Button
                  className="w-15 h-10 hidden sm:inline "
                  color={"gray"}
                  pill
                >
                  My Profile
                </Button>
              </>
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                Username: {currentUser.username}
              </span>
              <span className="block text-sm font-medium truncate">
                Email: {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} className="font-bold" as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/features"}
          className="font-bold"
          as={"div"}
        >
          <Link to="/features">Features</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/contact"}
          className="font-bold"
          as={"div"}
        >
          <Link to="/contact">Contact Us</Link>
        </Navbar.Link>

        <Navbar.Link
          active={path === "/about"}
          className="font-bold"
          as={"div"}
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
