import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaFileUpload, FaHome, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sidebarStyle = {
    left: isMobileMenuOpen ? "0%" : "-40%", // Adjust this as needed
  };

  return (
    <div id="sidebar" style={sidebarStyle}>
      <div className="sidebar-parent">
        {isMobileMenuOpen ? (
          <IoIosArrowDropleftCircle
            className="sidebar-in-out"
            onClick={() => toggleMobileMenu()}
          />
        ) : (
          <IoIosArrowDroprightCircle
            className="sidebar-in-out"
            onClick={() => toggleMobileMenu()}
          />
        )}
        <span>
          <FaHome size={20} />
        </span>
        <Link to="/publisherdashboard">
          <span >Dashboard</span>
        </Link>
      </div>
      <hr />
      <div>
        <span>
          <FaClipboardList size={20} />
        </span>
        <Link to="/view-my-books">
          <span >View My Books</span>
        </Link>
      </div>
      <hr />
      <div>
        <span>
          <FaFileUpload size={20} />
        </span>
        <Link to="/publish-book">
          <span>
            Publish a Book
          </span>
        </Link>
      </div>
      <hr />
      <div>
        <span>
          <IoIosNotifications size={20} />
        </span>
        <Link to="/notification">
          <span>
            Notification
          </span>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Sidebar;
