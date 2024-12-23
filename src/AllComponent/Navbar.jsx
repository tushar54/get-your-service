import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Context } from '../AllContext/Authcontext';

const Navbar = () => {
    const { currentUser, Out } = useContext(Context)
    console.log(currentUser)
    const handleLogOut = () => {
        Out()
    }

    const title = <>
        <NavLink to={'/'} className={({ isActive }) =>
            isActive
                ? 'border-b-2 border-red-500 text-red-500 font-bold'
                : 'text-gray-600 hover:text-red-500'
        }>Home</NavLink>

        <NavLink to={'/'} className={({ isActive }) =>
            isActive
                ? 'border-b-2 border-red-500 text-red-500 font-bold'
                : 'text-gray-600 hover:text-red-500'
        }>Services</NavLink>

        {
            currentUser ? <>
                <div className="dropdown dropdown-hover z-10">
                    <div tabIndex={0} role="button" className="btn m-1">Dashboard</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><NavLink to={'/addService'}>Add Service</NavLink></li>
                        <li><a>Manage Service</a></li>
                        <li><a>Booked-Services</a></li>
                        <li><a>Service-To-Do</a></li>
                    </ul>
                </div>
            </> : ''

        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    </div>
                    <ul
                        tabIndex={0}
                        className=" space-x-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            title
                        }
                    </ul>
                </div>
                <a className=""><i className='flex justify-center items-center text-3xl'> <img src={logo} alt="" /> Repair </i></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" space-x-2 menu menu-horizontal px-1">
                    {
                        title
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    currentUser ? <div className='flex justify-center items-center'><Link onClick={handleLogOut} className='btn'>Log-Out</Link> <p>{currentUser.email}</p></div> : <Link to={'/login'} className='btn'>LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;