
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [task,setTask]=useState("");
  const [list,setList]=useState([]);
  // const [changedlist, setChangedlist]=useState([]);
  const changed=(e)=>{
    setTask(e.target.value);
  }
  const clicked=(e)=>{
    setList([...list,task]);
    e.preventDefault();
  }
  function deleted(i){
    const newlist=list.filter((item,index)=> index!==i);
    setList(newlist);
  }

  return (
    <div>
        <input type="text" onChange={changed}></input>
        <button onClick={clicked}>Add Todo</button>
        <div>
          <ul>
          {
            list.map((item,index)=>{
              return <li>{item} <button onClick={() => deleted(index)}>Delete</button></li>;
            })
          }
          </ul>
        </div>
    </div>
  )
}

export default App
