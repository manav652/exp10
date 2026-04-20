
import React,{useState,useEffect} from "react";
import axios from "axios";

function App(){
 const [todos,setTodos]=useState([]);
 const [text,setText]=useState("");

 useEffect(()=>{
  axios.get("http://localhost:5000/api/todos")
  .then(res=>setTodos(res.data));
 },[]);

 const add=()=>{
  axios.post("http://localhost:5000/api/todos",{text})
  .then(()=>window.location.reload());
 };

 const del=(i)=>{
  axios.delete("http://localhost:5000/api/todos/"+i)
  .then(()=>window.location.reload());
 };

 return(
  <div>
   <h1>Todo App</h1>
   <input value={text} onChange={e=>setText(e.target.value)}/>
   <button onClick={add}>Add</button>

   {todos.map((t,i)=>(
    <div key={i}>
     {t.text}
     <button onClick={()=>del(i)}>Delete</button>
    </div>
   ))}
  </div>
 );
}

export default App;
