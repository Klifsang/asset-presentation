import React, { useEffect, useState } from "react";
import Celebrate from "./Celebrate.jsx";
import HttpClient from "../../HttpClient.jsx";
import { Collapse } from "antd";

const Notifications = () => {
  const [notifs, setNotifs] = useState([]);

  const getNotifications = async () => {
    const response = await HttpClient.get(`/api/notifications`);
    const data = response.data.map(item => ({
      key: item.id.toString(),
      label: item.status,
      children: <Celebrate />,
    }));
    setNotifs(data);
  };

  useEffect(() => {
    getNotifications();
  }, []);

  const onChange = async(key) => {
    console.log(key);
    const notificationId = parseInt(key);
    const response = await HttpClient.delete(`/api/notifications/${notificationId}`);
    console.log(response);
  };

  return (
    <div className="h-full overflow-auto">
      <div>Request approved, time to celebrate</div>
      <Message notifs={notifs} onChange={onChange} />
    </div>
  );
};

export default Notifications;


const Message = ({ notifs, onChange }) => {
  return (
    <Collapse items={notifs} onChange={onChange} />
  );
};