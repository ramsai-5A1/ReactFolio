import './ItemDate.css';

function ItemDate({day, month, year}) {

    return (<div className='mfg-date'>
        <span className='month-name'> {month} </span>
        <span> {year} </span>
        <span> {day} </span>
    </div>);
}

export default ItemDate;