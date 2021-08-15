import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import  Logo  from '../../assests/images/logo.png';
import  closeIcon  from '../../assests/images/Close.png';
import  InsideIcon  from '../../assests/images/icon-inside.png';
import  ArrowIcon  from '../../assests/images/Arrow.png';
import  MenuIcon  from '../../assests/images/Menu.png';
import './Sidebar.css';


function Sidebar() {
    return (
        <div className="navbar">
        <nav className="sidebar">
            <ul className="nav-menu-items">
                <li className="menu-link">
                    <Link to="#" className="menu-logo">
                      <img className="menu-image" src={Logo} alt="PO Logo"/><span>Pomo & Co</span>
                    </Link>
                </li>
                {SidebarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link>
                                {item.icon}<span>{item.title}{item.notifyData ? 
                                <span className="notify-number">
                                    {item.notifyData}</span> : null}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="order-ready">
                <img className="close-icon" src={closeIcon} alt="Close Icon"/>
                <img className="inside-icon" src={InsideIcon} alt="Inside Icon"/>
                <span className="text-order">Your Order is now Ready</span>
                <span className="text-order split" style={{ marginTop: "32px"}}>Splint Doumo</span>
                <span className="text-order split">Order Id: #ED564F</span>
                <div className="details-button">
                    <span>Details</span>
                    <img src={ArrowIcon} alt="Arrow Icon"/>
                </div> 
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
            </div>
            <div className="user-login">
                <div className="user-cred">
                    <span style={{ fontWeight: "600"}}>Mark Clarke</span>
                    <span>markclarke@gmail.com</span>
                </div>
                <img src={MenuIcon} alt="Menu Icon"/>
            </div>
        </nav>
        </div>
    )
}

export default Sidebar
