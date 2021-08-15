import React, {useEffect,useState} from 'react';
import './Restaurant.css';

function Restaurant(props) {

    const [restaurant,setRestaurant] = useState([])

    const [details,setDetails] = useState('');

    useEffect(() => {
        fetch("https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants")
            .then(response => response.json())
            .then(items => { setRestaurant(items.allRestaurants.filter((item) => item.restaurantCuisine.toLowerCase().includes(details.toLowerCase())))})
    })

    useEffect( () => {
        setDetails(props.filterItems);
    },[props.filterItems])

    const handleClick = (index) => {
        props.showDetails(index)
    }

    return (
        <div className="restaurnt-menu">
            <ul className="restaurant-fetch">
                {restaurant.map( (item,index) => {
                    return(
                        <li  key={index} onClick={ () => handleClick(index) } className="restaurant-details">
                            <img src={item.restaurantImage} className="restaurant-img" alt={item.restaurantName}/>
                            <div className="name-service">
                            <span className="restaurant-name">{item.restaurantName}</span>
                            {item.isOpen ? <p className="restaurant-service open">Open Now</p> : <p className="restaurant-service close">Closed</p>}
                            </div>
                            <span className="restaurant-description">{item.restaurantDescription}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Restaurant
