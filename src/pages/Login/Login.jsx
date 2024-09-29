import React, { useState } from "react";
import { useUser } from "../User/User";
import { useNavigate } from "react-router-dom";

const Login = ({ className }) => {
  const [username, setUsername] = useState("");
  const { user, login, logout } = useUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username);
    navigate("/");
  };

  return (
    <div className={className}>
      <form onSubmit={handleLogin} className="loginForm">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
