import React, { useState } from "react";
import { useNavigate } from "react-router";
import '../stylesheet/Login.css'

const Login = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  // Handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Successful");
        window.location.reload();
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-form">
        <div className="login-container">
          <div className="wrapper">
            <div className="title">
              <span>Login Form</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="pass">
                <a href="#">Forgot password?</a>
              </div>
              <div className="row button">
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="/register">Signup now</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  );
};

export default Login;
