import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img src={logo} alt="" />
    <p className='font-bold'>
     Fast Service Centre
      <br />
     
    </p>
  </aside>
  <nav className='*:font-bold'>
    
    <h6 className="footer-title">Services</h6>
    <Link to={'/ManageService'} className="link link-hover">Manage Service</Link>
    <Link to={'/serviceToDo'} className="link link-hover">Service To Do</Link>
    <Link to={'/addService'} className="link link-hover">Add Service</Link>
    <Link to={'/bookedservice'} className="link link-hover">Booked service</Link >
  </nav>
  <nav className='*:font-bold'>
    <h6 className="footer-title">Company</h6>
    <Link to={'/aboutme'} className="link link-hover">About us</Link>
    <Link to={'contact'} className="link link-hover">Contact</Link>
 
  </nav>

</footer>
        </div>
    );
};

export default Footer;