
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  // const [value, setValue] =useState(0)
  // // const [count, setCount] =useState(0)

  // const count = useRef(0);

  // useEffect(()=>{
  //   count.current = count.current + 1
  // })
  
  

// useEffect(()=>{
//   setCount(prev=>prev+1)
// });




const inputElement = useRef()

const btnclicked = ()=>{
  console.log(inputElement.current);
  inputElement.current.style.background = "blue";
}



  return (
    <>
{/* <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
<h1>{value}</h1>   
<button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
   <h1>Render count:{count.current}</h1> */}

   <input type='text' ref={inputElement}/>
   <button onClick={btnclicked}>click Here</button>

    </>
  )
}

export default App;