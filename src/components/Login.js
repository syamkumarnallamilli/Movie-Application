import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authActions"; 
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(email)); // Fetch user from localStorage

    if (storedUser && storedUser.password === password) {
      dispatch(login(email, password))
        .then(() => {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigate("/popular");
          }, 1000);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Netflix</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
      {showPopup && <div className="login-popup">Successful Login!</div>}
    </div>
  );
};

export default Login;
