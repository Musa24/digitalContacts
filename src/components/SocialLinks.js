import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaDiscourse } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <a href="##" className="link social-link-wrapper">
        <div className="social-link-icon">
          <FaPhone />
        </div>
        <span className="social-link-title">Call</span>
      </a>
      <a href="##" className="link social-link-wrapper">
        <div className="social-link-icon">
          <FaLinkedinIn />
        </div>
        <span className="social-link-title">LinkedIn</span>
      </a>
      <a href="##" className="link social-link-wrapper">
        <div className="social-link-icon">
          <FaInstagram />
        </div>
        <span className="social-link-title">Instagram</span>
      </a>
      <a href="##" className="link social-link-wrapper">
        <div className="social-link-icon">
          <FaDiscourse />
        </div>
        <span className="social-link-title">Text</span>
      </a>
      <a href="##" className="link social-link-wrapper">
        <div className="social-link-icon">
          <FaFacebookF />
        </div>
        <span className="social-link-title">Call</span>
      </a>
      <a href="##" className="link social-link-wrapper">
        <div className="social-link-icon">
          <FaTiktok />
        </div>
        <span className="social-link-title">TikTok</span>
      </a>
    </div>
  );
};

export default SocialLinks;
