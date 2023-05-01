import './ProductForm.css';
import { useState } from 'react';

function ProductForm() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        console.log(event.target.value);
        console.log("Printing values: ");
        console.log(title);
        console.log(date);
    }


    return (<form>
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