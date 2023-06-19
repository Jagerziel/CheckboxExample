import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from "react";

function App() {

  // Hold Checkbox Instances
  const [ instanceCheckbox , setInstanceCheckbox ] = useState({
    instance01: false,
    instance02: false,
    instance03: false,
    instance04: false,
    instance05: false
  })
  // console.log(instanceCheckbox)

  return (
    <div className="App">
      <header className="App-header">
        <input>
        </input>
      </header>
    </div>
  );
}

export default App;
