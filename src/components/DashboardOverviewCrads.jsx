import React from 'react';

const Card = ({ icon, title, content,contentColor
 }) => {
  return (
    <div className="Overviewcard">
      <div className="Overviewcard-content">
        <div className="Overviewcard-icon">{icon}</div>
        <h2 className="Overviewcard-title">{title}</h2>
        <p className="Overviewcard-text" style={{color:`${contentColor}`}}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
