import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import Restaurantdeatils from '../containers/Restaurantdetails';

import './Home.css';

function Home() {

    const [ details, setDetails ] = useState(false);
    const [resid,setResid] = useState(0);

    const showDetails = (itemNo) => {setDetails(!details);setResid(itemNo)};
    const handleBackClick = () => setDetails(!details);

    return (
        <div className='home'>
            <Sidebar/>
            {details ? <Restaurantdeatils handleBackClick={handleBackClick} resid={resid}/>: <Dashboard showDetails={showDetails}/>}
        </div>
    )
}

export default Home
