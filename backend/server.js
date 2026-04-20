
const express=require("express");
const app=express();
app.use(require("cors")());
app.use(express.json());

let todos=[];

// CRUD
app.get("/api/todos",(req,res)=>res.json(todos));
app.post("/api/todos",(req,res)=>{todos.push(req.body); res.json(req.body)});
app.delete("/api/todos/:id",(req,res)=>{todos=todos.filter((_,i)=>i!=req.params.id); res.json({msg:"deleted"})});

app.listen(5000,()=>console.log("Backend running"));
