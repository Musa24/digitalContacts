import React from 'react';

const Avatar = ({ image }) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-container">
        <img src={image} alt="person" className="avatar" />
      </div>
    </div>
  );
};

export default Avatar;
