import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
export default function Login({ toggleSignUp, setIsLoggedIn }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [authcode, setAuthcode] = useState(null);
  const [user, setUser] = useState("employee");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, authcode, password);
    await login({ username, authcode, password });
    navigate("/");
  };

  const changeUser = (event) => {
    setUser(event.target.value);
    if (user == "employee") setAuthcode(null);
  };
  return (
    <div className="container h-full overflow-auto">
      <div className="brand-logo"></div>
      <div className="brand-title text-center">Asset Ace</div>
      <div>
        <span>Login as</span>
        <select onChange={changeUser}>
          <option value="admin">Admin</option>
          <option value="employee" selected>
            Employee
          </option>
        </select>
      </div>
      <div className="inputs">
        <label htmlFor="email">User Name</label>
        <div>
          <input
            id="username"
            name="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
      </div>
      {user == "admin" && (
        <div className="inputs">
          <label htmlFor="authcode">Authorization Code</label>
          <div>
            <input
              id="authcode"
              name="authcode"
              type="text"
              onChange={(e) => setAuthcode(e.target.value)}
              required
            />
          </div>
        </div>
      )}

      <div className="inputs">
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <button type="submit" onClick={handleLogin}>
          Sign in
        </button>
      </div>
      <p>
        Not a member?
        <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
