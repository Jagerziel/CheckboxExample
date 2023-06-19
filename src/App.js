import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from "react";
import Checkbox from './checkbox/Checkbox.jsx'

// Determines if value is valid = above 0, a number, not an empty string
function isValid ( value ) {
  if (isNaN(value)) return false
  if (value === "") return false
  if (!isFinite(parseInt(value))) return false
  if (parseFloat(value) > 0 && parseInt(value) < 100) return true
}

function App() {
  const [ inputValue , setInputValue ] = useState("")
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
      <input 
          className="all-input"
          type="number" 
          min="0"
          max="100"
          placeholder="Enter a Value Between 0 and 100"
          onChange={(e) => (
            setInstanceCheckbox({
              ...instanceCheckbox, 
              "instance01": isValid(e.target.value) ? true : false,
              "instance02": isValid(e.target.value) && parseInt(e.target.value) < 25 ? true : false,
              "instance03": isValid(e.target.value) && parseInt(e.target.value) < 50 ? true : false,
              "instance04": isValid(e.target.value) && parseInt(e.target.value) < 75 ? true : false,
              "instance05": isValid(e.target.value) && parseInt(e.target.value) >= 75 ? true : false
            })       
          )}
      ></input>
      <div className="WCIAHomePrimary-landing-checkbox-container">
        <Checkbox instanceKey={"instance01"} instanceCheckbox={instanceCheckbox} setInstanceCheckbox={setInstanceCheckbox} description={"Value Entered Is Valid"}/>
        <Checkbox instanceKey={"instance02"} instanceCheckbox={instanceCheckbox} setInstanceCheckbox={setInstanceCheckbox} description={"Value is less than 25"}/>
        <Checkbox instanceKey={"instance03"} instanceCheckbox={instanceCheckbox} setInstanceCheckbox={setInstanceCheckbox} description={"Value is less than 50"}/>
        <Checkbox instanceKey={"instance04"} instanceCheckbox={instanceCheckbox} setInstanceCheckbox={setInstanceCheckbox} description={"Value is less than 75"}/>
        <Checkbox instanceKey={"instance05"} instanceCheckbox={instanceCheckbox} setInstanceCheckbox={setInstanceCheckbox} description={"Value is greater than or equal to 75"}/>
      </div>
    </div>
  );
}

export default App;
