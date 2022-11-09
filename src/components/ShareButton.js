import React from 'react';

const ShareButton = ({ changeModal }) => {
  const handleClick = () => {
    changeModal();
  };
  return (
    <div className="contact-button-container">
      <button type="button" className="contact-button" onClick={handleClick}>
        Save Contact
      </button>
    </div>
  );
};

export default ShareButton;
