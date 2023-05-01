import './ProductForm.css';
import { useState } from 'react';

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const productData = {
            title: newTitle,
            date: newDate
        };
        //console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }


    return (<form onSubmit={submitHandler}>
        <div className='new_product'>
            <div className='new_product_title'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>

            <div className='new_product_date'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>

            <div className='new_product_button'>
                <button type='submit' className='submit_button'>Add Product</button>
            </div>
        </div>
    </form>);
}

export default ProductForm;