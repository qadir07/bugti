


 import { useState } from "react";
 import './App.css'; function App() {
   const [cur, setCur] = useState('');

   function setCurrentValue(value) {
     setCur(prev => prev + value); 
   }


  function clearInput() {
     setCur('');
   }

   function calculateResult() {
     try {
       setCur(eval(cur))
    } catch (e) {setCur('Error');
    }
  }

  function Button({ value, onClick }) {
  return  (
  <button onClick={() => onClick(value)}>{value}</button>

); 
}
   return (
    <div className="calculator">
     <input type="text" value={cur} readOnly className="display" />
    <br />
      <div className="buttons">
       <Button value="7" onClick={setCurrentValue} />
       <Button value="8" onClick={setCurrentValue} />
       <Button value="9" onClick={setCurrentValue} />
       <Button value="/" onClick={setCurrentValue} />
        <br />
        <Button value="4" onClick={setCurrentValue} />
        <Button value="5" onClick={setCurrentValue} />
        <Button value="6" onClick={setCurrentValue} />
        <Button value="*" onClick={setCurrentValue} />
        <br/>
        <Button value="1" onClick={setCurrentValue} />
        <Button value="2" onClick={setCurrentValue} />
        <Button value="3" onClick={setCurrentValue} />
        <Button value="-" onClick={setCurrentValue} /> 
        <br />         
        <Button value="0" onClick={setCurrentValue} />         
        <Button value="." onClick={setCurrentValue} />        
         <Button value="+" onClick={setCurrentValue} />
        <br />
        <Button value="C" onClick={clearInput} />
         <Button value="=" onClick={calculateResult} />
       </div>
    </div>
   );
 }

 export default App;

