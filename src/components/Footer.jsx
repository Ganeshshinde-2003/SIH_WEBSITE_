import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Qr from "../assets/qr.png";

const Footer = () => {
  return (

        <div className='footer-content'>
          <div className='social-links'>
            <span><h3>Get Connected </h3></span>
            <FaFacebook className='footer-icon'/>
            <FaTwitter className='footer-icon'/>
            <FaYoutube className='footer-icon'/>
            <FaInstagram className='footer-icon'/>
          </div>
          <div className='footer-mid-text'>
            <span className='footer-text-l'>Application for Assessment of Quality of <br /> Textbook/ Reference Books/ E- Book</span>
            <span className='footer-text-m'>Application for Assessment of Quality of <br /> Textbook/ Reference Books/ E- Book</span>
            <span><br />	Smart Education</span>
          </div>
          <div className='qr-div'>
          <img src={Qr} alt="qr" className='qr-img'/>
          <div className='scan-text'>
          <span>Scan for live prototype!</span>
          </div>
          </div>
        </div>
  )
}

export default Footer