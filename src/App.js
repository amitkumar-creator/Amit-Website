import React,{useEffect,useState} from 'react';
import './App.css';

function App() {
  const getMode = ()=>{
    return JSON.parse(localStorage.getItem("mode"))||false
  }
  const[dark,setMode]=useState(getMode())
  useEffect(()=>{
  localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])
 
  return (
    <div className={dark?"App dark_mode":"App"}>
      <div className="nav">
        <label class="switch">
        <input 
        type="checkbox"
        checked={dark}
        onChange={()=>setMode(!dark)}
        />
        <span class="slider round"></span>
      </label>
      </div>
      <div className="content">
        <h1>{dark?"Dark mode is on": "Light mode on"}</h1>
        <p style={{fontSize:"20px"}}>see the some magic when press the toggle button</p>
      </div>
    </div>
  );
}

export default App;
