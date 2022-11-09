import React from 'react';
import Avatar from './Avatar';
import AvatarDetails from './AvatarDetails';
import ShareButton from './ShareButton';
import SocialLinks from './SocialLinks';
import img from '../img/musa salumu.jpeg';
import Modal from './Modal';
import { useState } from 'react';

const DigitalContacts = () => {
  const [hideModal, setHideModal] = useState(true);
  const changeModal = () => {
    setHideModal(!hideModal);
  };
  return (
    <div className="card-container">
      <Avatar image={img} />
      <AvatarDetails />
      <ShareButton changeModal={changeModal} />
      <SocialLinks />
      <Modal hideModal={hideModal} changeModal={changeModal} />
    </div>
  );
};

export default DigitalContacts;
