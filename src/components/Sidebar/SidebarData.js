import React from 'react';
import icon1 from '../../assests/images/Icon1.png'
import icon2 from '../../assests/images/Icon2.png'
import icon3 from '../../assests/images/Icon3.png'
import icon4 from '../../assests/images/Icon4.png'
import icon5 from '../../assests/images/Icon5.png'


export const SidebarData = [
    {
        title: 'Home',
        icon: <img src={icon3} alt="I"/>,
        cName: 'nav-text active'
    },
    {
        title: 'Orders',
        icon: <img src={icon2} alt="I"/>,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        icon: <img src={icon1} alt="I"/>,
        notifyData: 2,
        cName: 'nav-text'
    },
    {
        title: 'Help & Support',
        icon: <img src={icon4} alt="I"/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        icon: <img src={icon5} alt="I"/>,
        cName: 'nav-text'
    }
]