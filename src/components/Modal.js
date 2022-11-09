import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ hideModal, changeModal }) => {
  const handleClick = () => {
    changeModal();
  };
  return (
    <div className={hideModal ? 'hide' : ''}>
      <div
        className="
      modal-wrapper"
      >
        <div
          className="
        modal-container"
        >
          <div
            className="
          modal-close-button"
          >
            <FaTimes onClick={handleClick} />
          </div>
          <div
            className="
          contact-form-container"
          >
            <div
              className="
            section-header-container"
            >
              <p
                className="
              section-header"
              >
                Connect with me
              </p>
            </div>
            <div
              className="
            inputs-wrapper"
            >
              <div
                className="
              input-container"
              >
                <input
                  placeholder="Name *"
                  type="name"
                  id="Name"
                  className="
                  input"
                />
              </div>
              <div
                className="
              input-container"
              >
                <input
                  type="email"
                  placeholder="Email *"
                  className="
                  input"
                />
              </div>
              <div
                className="
              input-container"
              >
                <input
                  placeholder="Phone *"
                  className="
                input"
                />
              </div>
              <div
                className="
              input-container"
              >
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="
                  textarea"
                ></textarea>
              </div>
              <div
                className="
              submit-button-container"
              >
                <button
                  type="submit"
                  className="
                  submit-button"
                  onClick={handleClick}
                >
                  Exchange Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
