import React,{ useState,useEffect } from 'react';
import CartIcon from '../assests/images/Cart.png';
import backIcon from '../assests/images/back-icon.png';
import Clock from '../assests/images/Clock.png';
import Phone from '../assests/images/Phone.png';
import World from '../assests/images/jam_world.png';

import { CategoryitemData } from './CategoryItemData';

import './Restaurantdetails.css'

function Restaurantdeatils(props) {

    const [menu,setMenu] = useState([])

    useEffect(() => {
        fetch("https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails")
            .then(response => response.json())
            .then(items => { setMenu(items.restaurantDetails.filter( (item,index) => index === props.resid )) })
    }, [props.resid]);

    const handlebackClick = () => {
        props.handleBackClick();
    }

    return (
        <div className="restaurant-detail-section">
            <div className="button-icons">
            <div className="back-button">
                    <img className="back-icon" onClick={ () => handlebackClick(false)} src={backIcon} alt="Back Icon"/>
                </div>
                <div className="cart-button">
                    <img className="cart-icon" src={CartIcon} alt="Cart"/>
                </div>
            </div>

                <div className="restaurant-menu">
                    {menu.map ( (item,index) => {
                        return(
                            <div key={index} className="restaurant-item-menu">
                            <div className="restaurant-name-menu">
                                <span className="restaurant-title-menu">{item.restaurantName}</span>
                                <span className="restaurant-description-menu">{item.restaurantDescription}</span>
                                <div className="restaurant-directory">
                                    <img className="restaurant-directory-clock" src={Clock} alt="Clock"/>
                                    <span>{item.openingHours}</span>
                                </div>
                                <div className="restaurant-timings">
                                    <img src={Phone} alt="Phone"/>
                                    <span>{item.contactNumber}</span>
                                </div>
                                <div className="restaurant-web">
                                    <img src={World} alt="World"/>
                                    <span>{item.websiteUrl}</span>
                                </div>
                                </div>
                                <div className="restaurant-timings">
                            </div>
                            <img src={item.restaurantImage} alt={item.restaurantName}/>
                            </div>
                        )
                    })}
                </div>
                <div className="line"></div>
                <div className="items-class">
                    <button className="menu-item">All</button>
                    <button className="menu-item">Baked(2)</button>
                    <button className="menu-item">Sweet(4)</button>
                    <button className="menu-item">Hot Dish(29)</button>
                </div>
                <div className="menu-items">
                    <span className="menu-title">Menu</span>
                    <div className="item-grids">
                    {CategoryitemData.map( (item,index) => {
                        return(
                            <div key={index} className={item.cName}>
                                {item.itemPhoto}
                                <div>
                                    <span className="item-name">{item.itemName}</span>
                                    <span className="item-cost">{item.itemCost}</span>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
        </div>
    )
}

export default Restaurantdeatils
