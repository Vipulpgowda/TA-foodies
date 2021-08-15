import React,{ useState } from 'react'
import './filtermenu.css';
import CloseIcon from '../assests/images/CloseIcon.png'
import sortIcon from '../assests/images/openIcon.png'
import arrowdown from '../assests/images/Chevron-down.png'

const restaurantCuisine = [
    "All","Fast Food","Pizza","Dessert",
    "Breakfast","Asian","Mexican","Hot Dish","Salad"]

function Filtermenu(props) {

    const [filterItems,setFilteritems] = useState('')

    const handleFilterclick = (filterItems) => {
        props.showFilterItems(filterItems);
        props.showFiltermenu();
        
    }

    const handleSelect = (item) => {
        setFilteritems(item)
    }
    return (
        props.filtermenu ? (
            <div className="filter-menu">
            <div className="search-title">
                <span>Search filters</span>
                <img onClick={props.showFiltermenu} src={CloseIcon} alt="Close Icon"/>
            </div>
            <span className="sort-by">Sort By</span>
            <div className="sort-filter">
                <img src={sortIcon} alt="sort icon"/>
                <span onClick={handleSelect}>Open</span>
            </div>
            <span className="sort-by">Cuisine</span>
            <div className="cuisine-select">
            {restaurantCuisine.map( (item,index) => {
                return (
                    <div onClick={() => handleSelect(item)} className="cuisine-title" key={index}><span>{item}</span></div>
                )
            })}
            </div>
            <div className="more-button">
                <span>See More</span>
                <img src={arrowdown} alt="Arrow down"/>
            </div>
            <button onClick={() => handleFilterclick(filterItems)} className="cuisine-filter">
                Apply Filters
            </button>
        </div>
        ) : []
    )
}

export default Filtermenu
