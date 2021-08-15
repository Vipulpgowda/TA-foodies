import React from 'react'
import './navbar.css'
import backIcon from '../assests/images/back-icon.png';
import Restaurant from '../assests/images/Restaurant.png';
import Menu from '../assests/images/Menu.png';
import CartIcon from '../assests/images/Cart.png';
import FilterIcon from '../assests/images/Filter.png';
import SearchIcon from '../assests/images/Search.png';

function Navbar(props) {
    return (
        <div className="navigation-top">
            <div className="back-icon">
                <img src={backIcon} alt="Back Icon"/>
            </div>
            <div className="home-cart">
                <img className="home-icon" src={Restaurant} alt="Home Icon"/>
                <span>Da Otto</span>
                <img className="menu-icon" src={Menu} alt="Menu Icon"/>
            </div>
            <img className="search-icon" src={SearchIcon} alt="Search"/>
                <input className="search-button" type="text" placeholder="Search for Results(Press Enter to Search)"/>
            <div className="filter-cart">
                <img onClick={props.showFiltermenu} className="filter-icon" src={FilterIcon} alt="Filter"/>
                <img className="cart-icon" src={CartIcon} alt="Cart"/>
            </div>
        </div>
    )
}

export default Navbar
