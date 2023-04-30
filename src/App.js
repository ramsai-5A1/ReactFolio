import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import ProductItem from './components/ProductItem';

function App() {
  const response = [
    {
      itemName: "Nirma1",
      itemDate: "201",
      itemMonth: "June1",
      itemYear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDate: "202",
      itemMonth: "June2",
      itemYear: "1999"
    },
    {
      itemName: "Nirma3",
      itemDate: "203",
      itemMonth: "June3",
      itemYear: "2000"
    },
    {
      itemName: "Nirma4",
      itemDate: "204",
      itemMonth: "June4",
      itemYear: "2001"
    }
  ];

  return (
    <div className='App'>
        
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
        
    </div>
  );
}

export default App;
