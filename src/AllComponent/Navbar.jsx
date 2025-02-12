import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Context } from '../AllContext/Authcontext';
import { ThemeContext } from '../AllContext/ThemeProvider';
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
    const { currentUser, Out } = useContext(Context);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOut = () => {
        Out();
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const title = (
        <>
            <NavLink to={'/'} className={({ isActive }) =>
                isActive
                    ? 'border-b-2 border-green-500 text-green-500 font-bold'
                    : 'text-gray-600 hover:text-green-500'
            }>Home</NavLink>
            <NavLink to={'/aboutme'} className={({ isActive }) =>
                isActive
                    ? 'border-b-2 border-green-500 text-green-500 font-bold'
                    : 'text-gray-600 hover:text-green-500'
            }>About Us</NavLink>
            <NavLink to={'/contact'} className={({ isActive }) =>
                isActive
                    ? 'border-b-2 border-green-500 text-green-500 font-bold'
                    : 'text-gray-600 hover:text-green-500'
            }>Contact</NavLink>

            <NavLink to={'/allServices'} className={({ isActive }) =>
                isActive
                    ? 'border-b-2 border-green-500 text-green-500 font-bold'
                    : 'text-gray-600 hover:text-green-500'
            }>Services</NavLink>

            {currentUser && (
                <div className="relative">
                    <button
                        className="m-1"
                        onClick={toggleDropdown}>
                        Dashboard
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                            <li><NavLink to={'/addService'}>Add Service</NavLink></li>
                            <li><NavLink to={'/ManageService'}>Manage Service</NavLink></li>
                            <li><NavLink to={'/bookedservice'}>Booked Service</NavLink></li>
                            <li><NavLink to={'/serviceToDo'}>Service To Do</NavLink></li>
                        </ul>
                    )}
                </div>
            )}
        </>
    );

    return (
        <div className="container mx-auto fixed z-30 navbar top-0 bg-base-100 border-b-2 border-b-green-400 pb-5 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        className="btn btn-ghost lg:hidden"
                        onClick={toggleDropdown}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <ul
                            className="menu menu-sm z-50 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-bold">
                            {title}
                        </ul>
                    )}
                </div>
                <Link to={'/'} className="">
                    <i className='flex justify-center items-center text-3xl gap-2'>
                        <img className='w-[50px] h-[50px]' src={logo} alt="" /> Repair
                    </i>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-6 text-lg menu menu-horizontal px-1 font-bold text-green-600">
                    {title}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <button className="btn ml-2" onClick={toggleTheme}>
                    {theme === 'light' ? <CiDark /> : <CiLight />}
                </button>
                {currentUser ? (
                    <div className='flex justify-center items-center gap-2'>
                        <p className='font-semibold hidden md:block'>{currentUser.displayName}</p>
                        <div className="tooltip tooltip-bottom z-10" data-tip={currentUser.email}>
                            <img
                                referrerPolicy="no-referrer"
                                className='w-[50px] h-[50px] rounded-full'
                                src={currentUser.photoURL}
                                alt=""
                            />
                        </div>
                        <Link onClick={handleLogOut} className='hover:bg-red-400 hover:text-white font-semibold border-2 px-3 py-2 rounded-xl'>
                            Log-Out
                        </Link>
                    </div>
                ) : (
                    <Link to={'/login'} className='hover:bg-green-400 hover:text-white font-semibold border-2 px-3 py-2 rounded-xl'>
                        LogIn
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
