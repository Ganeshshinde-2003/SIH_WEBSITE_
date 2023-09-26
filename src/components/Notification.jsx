import React from "react";
import Sidebar from "./Sidebar";

const NotificationPage = () => {
 

  return (
    <div style={{ display: "flex"}} className="notification-page">
      <Sidebar />
      <h1 style={{margin:'50px'}}>No notifications yet.</h1>      
    </div>
  );
};

export default NotificationPage;
