import React from "react"
import { FaTiktok, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
    <footer id="footer" className="footer"> 
      <div className="container text-center">
        <h2>Follow my socials</h2>
        <div className="ikon">
          <a href="https://www.tiktok.com/@itsakalanka" > <FaTiktok size={33} /> </a>
          <a href="https://twitter.com/ralandhkm"> <FaTwitter size={33} /> </a>
          <a href="https://www.linkedin.com/in/rlndhkm/"> <FaLinkedin size={33} /> </a>
          <a href="https://www.instagram.com/ralandhkm/"> <FaInstagram size={33} /> </a>
        </div>
      </div>
      <hr className="custom"/>

      <div className='container'>
        <div className='d-flex justify-content-center pb-3'>
          {/* <p>© 2023 Library Service  Inc. All rights reserved.</p> */}
          <p>Copyright © 2023 Designed by Ralandhkm</p>
        </div>
      </div>
    </footer>    
  ) 
}

export default Footer