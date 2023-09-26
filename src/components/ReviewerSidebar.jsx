import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaFileUpload, FaHome, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function ReviewerSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sidebarStyle = {
    left: isMobileMenuOpen ? "0%" : "-40%", 
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
        <Link to="/reviewerdashboard">
          <span >Dashboard</span>
        </Link>
      </div>
      <hr />
      <div>
        <span>
          <FaClipboardList size={20} />
        </span>
        <Link to="/view-my-reviews">
          <span >View My Reviews</span>
        </Link>
      </div>
      <hr />
      <div>
        <span>
          <FaFileUpload size={20} />
        </span>
        <Link to="/review-book">
          <span>
            Start Review
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

export default ReviewerSidebar;
