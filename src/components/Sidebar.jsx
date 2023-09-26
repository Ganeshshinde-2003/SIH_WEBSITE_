import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaFileUpload, FaHome, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {

  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div id="sidebar">
      <div>
        <span>
          <FaHome size={20} />
        </span>
        <Link to="/publisherdashboard">
          <span onClick={() => setActiveItem('dashboard')} >Dashboard</span>
          </Link>

      </div>
      <hr />
      <div>
        <span>
          <FaClipboardList size={20} />
        </span>
        <Link to="/view-my-books">
          <span onClick={() => setActiveItem('viewbooks')}>View My Books</span>
          </Link>

      </div>
      <hr />
      <div>
        <span>
          <FaFileUpload size={20} />
        </span>
        <Link to="/publish-book">
          <span onClick={() => setActiveItem('publishbook')}>Publish a Book</span>
          </Link>

      </div>
      <hr />
      <div>
        <span>
          <IoIosNotifications size={20} />
        </span>
        <Link to="/notification">
          <span onClick={() => setActiveItem('notification')}>Notification</span>
          </Link>
      </div>
      <hr />
    </div>

    
  );
}

export default Sidebar;

