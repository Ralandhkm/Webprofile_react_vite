import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import r from '../assets/img/letter.png'

const Navbar = () => {
  const [style, setStyle] = useState({
    background: 'linear-gradient(180deg, rgba(0,123,255,.3) 100%, rgba(255, 255, 255,.1) 50%)',
    height: '100px',
   });

   useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) { // Ubah 50 ke tinggi yang sesuai
        setStyle({
          background: '#18181b',
          height: '70px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        })
      } else{
        setStyle({
          background: 'linear-gradient(180deg, rgba(0,123,255,.3) 100%, rgba(255, 255, 255,.1) 50%)',
          height: '100px',
        })
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={style}>
      <div className="container-fluid py-2">
        <a className="navbar-brand ps-5" href="#">
          <img className='icon rounded-3' src={r} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <HashLink
              className="nav-link mx-3" aria-current="page"
              to='/#' >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
            <HashLink
              className="nav-link mx-3" 
              to='/#skill' >
                Skill
              </HashLink>
            </li>
            <li className="nav-item">
            <HashLink
              className="nav-link mx-3" 
              to='/#projek' >
                Project
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link mx-3" 
              to='/#footer' >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar