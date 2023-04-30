import './ProductForm.css';

function ProductForm() {
    return (<form>
        <div className='new_product_title'>
            <label>Title</label>
            <input type='text'></input>
        </div>

        <div className='new_product_date'>
            <label>Date</label>
            <input type='date' min='2023-01-01' max='2023-12-12'></input>
        </div>

        <div className='new_product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </form>);
}

export default ProductForm;