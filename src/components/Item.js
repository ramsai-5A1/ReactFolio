import './Item.css';

function Item(props) {
    return (<div>
        <p className="nirma"> {props.name} </p>
        {props.children}
    </div>);
}
 
export default Item;