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
      Providing reliable tech since 1992
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
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='*:font-bold'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;