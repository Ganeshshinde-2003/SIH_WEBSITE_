import React from "react";
import ContactusCard from "../components/ContactusCard";
import { FaMapSigns, FaTelegramPlane } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const Contactus = () => {
  return (
    <div className="contactus-container">
      <p className="contactus-heading">Contact Us</p>
      <p className="contactus-fancy-line">
        <i>
          Reach out and let's embark on a journey to elevate the world of
          medical literature through insightful reviews and shared wisdom.
        </i>
      </p>
      <div className="contactus-card">
        <div>
          <ContactusCard
            icon={<FaMapSigns />}
            head="Address"
            text="Kudlu Gate, Bangalore"
          />
          <ContactusCard
            icon={<IoMdCall />}
            head="Contact Number"
            text="+123 4567 890"
          />
        </div>
        <div>
          <ContactusCard
            icon={<FaTelegramPlane />}
            head="Email Address"
            text="ayush@gmail.com"
          />
          <ContactusCard
            icon={<BsGlobeCentralSouthAsia />}
            head="Website"
            text="ayush.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
