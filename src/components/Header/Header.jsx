import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../pages/User/User";

const Header = ({ className }) => {
  const { user, logout } = useUser();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <div className={className}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Cats">Cats Album</Link>
        </li>
        {user && (
          <li>
            <Link to="LikedCats">Liked Cats</Link>
          </li>
        )}
        <li>
          {user ? (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="Login">Login</Link>
          )}
        </li>
        {user && (
          <li>
            <span>Welcome, {user.username}!</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
