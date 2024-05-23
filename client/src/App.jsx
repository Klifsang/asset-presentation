import React, { useContext, useEffect, useState } from "react";
import About from "./components/common/About/About.jsx";
import Contact from "./components/common/Contact/Contact.jsx";
import Footer from "./components/common/Footer/Footer.jsx";
import Companies from "./components/common/Home/Companies/Companies.jsx";
import Header from "./components/common/Home/Header/Header.jsx";
import Home from "./components/common/Home/Home.jsx";
import StaffContent from "./components/staff/content/Content.jsx";
import AdminContent from "./components/admin/content/Content.jsx";
import "./App.css";
import { AuthContext } from "./AuthContext.jsx";

function App() {
  const { user } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log("User updated:", user);
    if (user) {
      setLoggedIn(true);
      console.log("User object when logged in:", user);
    } else {
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <>
      {loggedIn && user.level === "admin" && <AdminContent />}
      {loggedIn && user.level === "employee" && <StaffContent />}
      {!loggedIn && (
        <section className="app">
          <Header />
          <Home />
          <Companies />
          <About />
          <Contact />
          <Footer />
        </section>
      )}
    </>
  );
}

export default App;
