import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

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

  function printProductData(data) {
    console.log("I am inside App.js");
    console.log(data);
  }

  return (
    <div className='app'>
        <div className='new_product'>
          <NewProduct pranay = {printProductData} />  
        </div>
        
        <div className='products'>
          <Products items={response}/>
        </div>
        
    </div>
  );
}

export default App;
