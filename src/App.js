import './App.css';
import TableComponent from './components/TableComponent.js';
import SelectComponent from './components/SelectComponent.js';
import ButtonComponent from './components/ButtonComponent.js';
import Card from './components/card';
import Input from './components/input';


function App() {
  
  const Changeme = () => {
    console.log('Button has been clicked!');
  };

  const inputValue = '';  
  const InputChange = (e) => {
      console.log('Input is:', e.target.value);
  };

  const data = [{
     name: 'Ilma', 
     age: 21, 
     location: 'Nazimabad' 
    },
    { 
      name: 'Laiba', 
      age: 23, 
      location: 'PECHS' 
    },
    { 
      name: 'Fatima', 
      age: 22, 
      location: 'Gulshan' }
  ];
  
  return (
    <div className="App">
      <h1>Table Component</h1>
      <TableComponent data={data} />
      
      <h1>Select Component</h1>
      <SelectComponent />

      <h1>Button Component </h1>
      <ButtonComponent onclick={Changeme} text="Click me!"></ButtonComponent>

      <h1>Card Component</h1>
      {data.map((value, index) => <Card name={value.name} age={value.age} location={value.location}/>)}

      <h1>Input Component</h1>
      <Input type="text" placeholder="Enter here" value={inputValue} onChange={InputChange}/>
      <p>Your entered text is: {inputValue}</p>
    </div>
  );
}
  
export default App;
