import React,{ useState,useEffect } from 'react';
import './Dashboard.css';
import Navbar from '../../containers/navbar';
import { CategoryData }  from './CategoryData';
import Restaurant from './Restaurant';
import Filtermenu from '../../containers/filtermenu';


function Dashboard(props) {
    const [ filtermenu, setFiltermenu ] = useState(false);
    const [ filterItems,setFilterItems] = useState('');

    const showFilterItems = (item) => {setFilterItems(item);console.log(filterItems)};
    const showFiltermenu = () => setFiltermenu(!filtermenu);

    useEffect(() => {
        console.log(filterItems);
    }, [filterItems])

    return (
        <div className="dashboard">
            <Navbar showFiltermenu={showFiltermenu}/>
            <div className="category-menu">
                <p className="category-title">Category</p>
                <ul className="category-items">
                    {CategoryData.map( (item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                                {item.icon}<span>{item.title}</span>
                        </li>
                    )
                    })}
                </ul>
            </div>
            <div className="restaurant-list">
                <p className="restaurant-title">Restaurant</p> 
                <Restaurant showDetails={props.showDetails} filterItems={filterItems} />
            </div>
            <Filtermenu filtermenu={filtermenu} showFiltermenu={showFiltermenu} showFilterItems={showFilterItems}/>
        </div>
    )
}

export default Dashboard
