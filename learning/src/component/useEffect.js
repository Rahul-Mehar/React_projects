// the useEffect  hooko allows you to perform side effect in your components
// some example of side effect are 
// fetching data from api
// directly updating the Dom
// timers like setTimeout and setInterval

import { useEffect, useState } from 'react';
import './App.css';

function App() {


// useEffect(callback function, dependancey)
// useEffect(()) without any dependancy 
// useEffect((),[]) with depedancy
// useEffect((),[]) with variable  depedancy 


const [count, setCount] =useState(0)
const [name, setName] =useState("GreatStack")

// here we set one timer function because that zero upadte automaticaly with given time that by we use useEffect without any dependancy


// this useEffect function autoupdate in every 2 second beacuse here we use without any depedancy so if we want to stop it than we should apply dependancy(empty array its will call only when the component is load that time it will execute the call back funcntion only once time)

// if i write a count inside a depedancy its mean it will call callback function again and agin that why it will rum automatically


useEffect(()=>{
  setTimeout(() => {
  setCount(count => count+1);
  },2000)
}, [count,name])

  return (
    <>

<h1>I name {name} and i  rendered {count} time!</h1>

    </>
  )
}

export default App;