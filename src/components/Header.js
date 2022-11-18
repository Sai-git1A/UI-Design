import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className='navbar'>
        <div className='nav-container'>
            <div className='nav-content'>
            <Link className='nav-items' to='www.google.com' target='_blank'>
                <span>Services</span>
            </Link>
            <Link className='nav-items' to='www.google.com' target='_blank'>
                <span>Product</span>
            </Link>
            <Link className='nav-items' to='www.google.com' target='_blank'>
                <span>Technology</span>
            </Link>
            <Link className='nav-items' to='www.google.com' target='_blank'>
                <span>About <i className="fa-solid fa-angle-down"></i></span>
            </Link>
            <Link className='nav-items' to='www.google.com' target='_blank'>
                <span>Client <i className="fa-solid fa-angle-down"></i></span>
            </Link>
            <Link className='nav-items' to='www.google.com' target='_blank'>
                <span>Partner</span>
            </Link>
            </div>
            <div className='nav-icons'>
            <Link className='icons'>
            <i className="fa-solid fa-house"></i>
            </Link>
            <Link className='icons'>
            <i className="fa-solid fa-envelope"></i>
            </Link>
            <Link className='icons'>
            <i className="fa-solid fa-shuffle"></i>
            </Link>
            </div>
        </div>
        </div>
    )
}
