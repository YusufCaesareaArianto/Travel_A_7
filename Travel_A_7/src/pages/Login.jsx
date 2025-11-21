import React, {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "../Login.css";
import bgImage from "../assets/login.png";
import logo from "../assets/logo.svg";


const Login=() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin=(e) => {
    e.preventDefault();

    if(email.trim() === "" || password.trim() === "") {
      setError("E-mail dan Password wajib diisi!");
      return;
    }else if(password.length < 6) {
      setError("Password minimal 6 karakter!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError("Format E-mail tidak valid!");
        return;
    }

    setError("");
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={bgImage} alt="logo" className="tugu-logo" />

        <h2>Sign In</h2>
        <p>
          Continue your journey and explore the best of <br />
          Yogyakarta with us.
        </p>

        <form onSubmit={handleLogin} className="form-login">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="errorText">{error}</p>}

          <button type="submit" className="btn-login">
            Sign In
          </button>
        </form>

        <p className="register-text">
          Not registered yet? <a href="/register">Create an Account</a>
        </p>
      </div>

      <div className="login-right">
        <img src={bgImage} alt="Background" className="bg-right" />
      </div>
    </div>
  );
};

export default Login;
