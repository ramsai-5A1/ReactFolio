import './ProductItem.css';
import Item from './Item';
import ItemDate from './ItemDate';

function ProductItem({itemName, itemDate, itemMonth, itemYear}) {

    function clickHandler() {
        console.log("Button clicked");
    }

    return (
    <div className='product-item'>
        <ItemDate day={itemDate} month={itemMonth} year={itemYear}></ItemDate>
        <div className='product-name'>
            <h2>{itemName}</h2>
        </div>
        <button onClick={clickHandler} className='add-to-cart'>Add to cart</button>
    </div>);
}

export default ProductItem;