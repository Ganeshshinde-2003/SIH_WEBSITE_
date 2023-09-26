import React from "react";

const ContactusCard = ({ icon, head, text }) => {
  return (
    <div className="contactuscard-main">
      <div className="contactuscard-icon">{icon}</div>
      <p className="contactuscard-head">{head}</p>
      <p className="contactuscard-text">{text}</p>
    </div>
  );
};

export default ContactusCard;
