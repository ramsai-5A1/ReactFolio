import React, { useState } from 'react';

import './ProductItem.css';
import ItemDate from './ItemDate';

function ProductItem(props) {

    const [itemName, setItemName] = useState(props.itemName);

    function clickHandler() {
        setItemName("surf-excell");
        console.log("Button clicked");
    }

    return (
    <div className='product-item'>
        <ItemDate day={props.itemDate} month={props.itemMonth} year={props.itemYear}></ItemDate>
        <div className='product-name'>
            <h2>{itemName}</h2>
        </div>
        <button onClick={clickHandler} className='add-to-cart'>Add to cart</button>
    </div>);
}

export default ProductItem;