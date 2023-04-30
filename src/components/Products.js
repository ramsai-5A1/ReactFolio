import './Products.css';
import ProductItem from './ProductItem';

function Products(props) {
    const response = props.items;

    return (<div>   
         <ProductItem 
          itemName={response[0].itemName} 
          itemDate={response[0].itemDate} 
          itemMonth={response[0].itemMonth} 
          itemYear={response[0].itemYear}
        />

        <ProductItem 
          itemName={response[1].itemName} 
          itemDate={response[1].itemDate} 
          itemMonth={response[1].itemMonth} 
          itemYear={response[1].itemYear} 
        />

        <ProductItem 
          itemName={response[2].itemName} 
          itemDate={response[2].itemDate} 
          itemMonth={response[2].itemMonth} 
          itemYear={response[2].itemYear}
        />

        <ProductItem 
          itemName={response[3].itemName} 
          itemDate={response[3].itemDate} 
          itemMonth={response[3].itemMonth} 
          itemYear={response[3].itemYear}
        />
    </div>);
}

export default Products;