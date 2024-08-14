import React from 'react';
import './Card.css'; // Import CSS file for styling

const Card = ({ title, image, description, buttonText, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {buttonText && link && (
          <a href={link} className="card-button">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
