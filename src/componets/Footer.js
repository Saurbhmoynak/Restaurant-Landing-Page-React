import React from 'react'
import Logo from "../Assets/Logo.svg"
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
            <img src={ Logo } alt=""/>
          </div>
          <div className="footer-icons">
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>

        <div className="footer-section-columns">
          <span>111-2222-3333</span>
          <span>foodie@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Private Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer