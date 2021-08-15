import React from 'react';
import Sweeticon from '../../assests/images/Sweet-icon.png'
import Saladicon from '../../assests/images/Salad-icon.png'
import Hotdishicon from '../../assests/images/Hotdish-icon.png'
import Bakedicon from '../../assests/images/Baked-icon.png'


export const CategoryData = [
    {
        title: 'Baked',
        icon: <img src={Sweeticon} alt="I"/>,
        cName: 'cat-icon'
    },
    {
        title: 'Sweet',
        icon: <img src={Saladicon} alt="I"/>,
        cName: 'cat-icon'
    },
    {
        title: 'Hot Dish',
        icon: <img src={Hotdishicon} alt="I"/>,
        cName: 'cat-icon'
    },
    {
        title: 'Fast Food',
        icon: <img src={Bakedicon} alt="I"/>,
        cName: 'cat-icon'
    },
    {
        title: 'Salads',
        icon: <img src={Bakedicon} alt="I"/>,
        cName: 'cat-icon'
    }
]