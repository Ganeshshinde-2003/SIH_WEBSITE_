import React, { useState } from "react";
import Sidebar from "./Sidebar";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = `New notification ${notifications.length + 1}`;
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div style={{ display: "flex"}} className="notification-page">
      <Sidebar />
      <h1>Notifications</h1>
      <button onClick={addNotification}>Add Notification</button>
      <div className="notification-list">
        {notifications.length === 0 ? (
          <h3>No notifications yet.</h3>
        ) : (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
