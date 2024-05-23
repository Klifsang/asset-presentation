import React, { createContext, useState, useEffect } from "react";
import HttpClient from "./HttpClient";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      try {
        const response = await HttpClient.get("/api/checksession");
        console.log("Check session response:", response.data);
        if (response.data.id) {
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setUser(null);
      }
    }
    checkUser();
  }, []);

  const login = async ({ username, authcode, password }) => {
    try {
      const response = await HttpClient.post("/api/user/login", {
        username,
        authcode,
        password,
      });
      console.log("Login response:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = async () => {
    try {
      await HttpClient.post("api/logout", {
        withCredentials: true,
      });
      console.log("Logout response:", response.data);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
