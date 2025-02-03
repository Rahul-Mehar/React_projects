import { useState } from 'react';
import './App.css';

function App() {

//  const [color, setColor] = useState('_____')

//  const changecolor = () =>{
//   setColor("pink")
//  }


// const [brand, setBrand] = usestate("ferrari");
// const [model, setModel] = usestate("Roma");
// const [year, setYear] = usestate("2023");
// const [color, setColor] = usestate("red");

const [car,setCar] = useState({
  brand:"Farrai",
  model:"Rome",
  year:"2023",
  color:"Red"
})


const changecolor = ()=>{
  setCar((prev)=>{
    return {brand:"Audi", mode:"creta",color: "blue", year:"2024"}
  })
}

  return (
    <>
    {/* <h1>My favourite color is {color} </h1>
    <button onClick={changecolor}>blue</button> */}
    <h1> My {car.brand}</h1>
    <h2>It us a {car.color} {car.model} From {car.year} </h2>
    <button onClick={changecolor}>Blue</button>
    </>
  );
}

export default App;