import React, { useContext } from "react";
import "./content.css";
import Footer from "../../common/Footer/Footer.jsx";
import AvailableAssets from "../../common/AvailableAssets.jsx";
import Employees from "../Employees.jsx";
import MyRequests from "../../common/MyRequests.jsx";
import Requests from "../Requests.jsx"
import Logout from "../../common/Logout.jsx";
import MyAssets from "../MyAssets.jsx";
import Notifications from "../../common/Notifications.jsx";
import { AuthContext } from "../../../AuthContext.jsx";
import ProfileContent from "../Profile.jsx";
const AdminContent = () => {
  const [display, setDisplay] = React.useState("dashboard");
  const [assets, setAssets] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [requests, setRequests] = React.useState([]);
  const { user } = useContext(AuthContext);
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
      component: AvailableAssets,
    },
    { id: "users", label: "Staff", path: "/staff", component: AvailableAssets },
    {
      id: "myAssets",
      label: "My Assets",
      path: "/my-assets",
      component: MyAssets,
    },
    {
      id: "requests",
      label: "All Requests",
      path: "/requests",
      component: AvailableAssets,
    },
    {
      id: "myRequests",
      label: "My Requests",
      path: "/my-requests",
      component: AvailableAssets,
    },
    {
      id: "profile",
      label: "My Profile",
      path: "/profile/:id",
      component: ProfileContent,
    },
    {
      id: "notifications",
      label: "Notification",
      path: "/notification",
      component: Notifications,
    },
  ];
  return (
    <section className="content">
      <div className="flexCenter innerWidth paddings content-wrapper">
        <div className="flexColCenter content-right rit">
          <button className="buttonn">{user.role}</button>
          <div className="circle">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile"
            />
          </div>
          <span className="buttonn">{user.level}</span>

          {navItems.map((item) => (
            <button
              className="button-black"
              onClick={(event) => {
                event.stopPropagation();
                setDisplay(item.id);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flexColCenter content-left">
          <div className="top">
            {display === "dashboard" && (
              <>
                <span className="blueText title">Assets({assets.length})</span>
              </>
            )}
            {display === "employees" && (
              <>
                <span className="blueText title">
                  Employees({users.length})
                </span>
              </>
            )}
            {display === "message" && (
              <>
                <span className="blueText title">
                  Messages({requests.length})
                </span>
              </>
            )}
            <br />
            <div className="flexCenter search">
              <div className="left">
                {" "}
                {/* <SearchBar2
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                /> */}
              </div>
              <div className="right-side">
                <span>sort By</span>
                <span />
                {/* <Drop /> */}
                <button className="button-filter">
                  {/* <BsFillFilterSquareFill /> */}
                </button>
              </div>
            </div>
          </div>
          <div className="flexCenter innerWidth bottom">
            <div className="innerWidth flexCenter asset-display">
              {display === "dashboard" && <AvailableAssets />}
              {display === "users" && <Employees />}
              {display === "myAssets" && <MyAssets />}
              {display === "requests" && <Requests />}
              {display === "myRequests" && <MyRequests />}
              {display === "profile" && <ProfileContent />}
              {display === "notifications" && <Notifications />}
            </div>
          </div>
        </div>
        <div className="content-footer">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default AdminContent;
