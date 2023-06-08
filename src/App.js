import './App.css';
import React,{useState} from 'react';
import Buttons from './Buttons';


function App() {
const [change,setChange] =  useState(document.querySelector('body'))
  return (
    <div className="wrapper">
     <div className='wrapper__container container'>
        <Buttons color="red" fn={change}/>
        <Buttons color="green" fn={change}/>
        <Buttons color="black" fn={change}/>
        <Buttons color="yellow" fn={change}/>
        <Buttons color="pink" fn={change}/>
        <Buttons color="purple" fn={change}/>
        <Buttons color="orange" fn={change}/>
        <Buttons color="brown" fn={change}/>
        <Buttons color="lime" fn={change}/>
        <Buttons color="blue" fn={change}/>
        <Buttons color="white" fn={change}/>
     </div>
    </div>
  );
}

export default App;
