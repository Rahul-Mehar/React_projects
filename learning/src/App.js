import { useState } from 'react';
import './App.css';

function App() {

 const [color, setColor] = useState('_____')

 const changecolor = () =>{
  setColor("pink")
 }

  return (
    <>
    <h1>My favourite color is {color} </h1>
    <button onClick={changecolor}>blue</button>
    </>
  );
}

export default App;
