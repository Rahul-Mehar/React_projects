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




// const [car,setCar] = useState({
//   brand:"Farrai",
//   model:"Rome",
//   year:"2023",
//   color:"Red"
// })


// const changecolor = ()=>{
//   setCar((prev)=>{
//     return {brand:"Audi", mode:"creta",color: "blue", year:"2024"}
//   })
// }

const [count, setCount] = useState(4);

const increaseCount = ()=>{
  // setCount(count+1)// when you want to increase a value by 1
  setCount(count=>count + 1)//when we to increase a value by 4
  setCount(count=>count + 1)
  setCount(count=>count + 1)
  setCount(count=>count + 1) 
}
const decreaseCount = ()=>{
  // setCount(count=>count -1)
  // setCount(count=>count -1)
  // setCount(count=>count -1)
  // setCount(count=>count -1)
setCount(prevCount=>(prevCount>0 ? Math.max(prevCount - 4, 0):0))
// here we stop at zero (now its not going in minus series)
}




  return (
    <>
    {/* <h1>My favourite color is {color} </h1>
    <button onClick={changecolor}>blue</button> */}



    {/* <h1> My {car.brand}</h1>
    <h2>It us a {car.color} {car.model} From {car.year} </h2>
    <button onClick={changecolor}>Blue</button> */}

<h1>count:{count}</h1>
{/* <button onClick={increaseCount}>Increase by 1</button> */}
<button onClick={increaseCount}>Increase by 4</button>
{/* <button onClick={decreaseCount}>decrease</button> */}
<button onClick={decreaseCount}>decrease by 4</button>


    </>
  );
}

export default App;