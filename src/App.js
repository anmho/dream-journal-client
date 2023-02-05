<<<<<<< HEAD
import Sidebar from './Sidebar.js'
import Titlebar from './Titlebar.js';
import React, {useState, useRef} from 'react';
import './App.css';
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import SignIn from './SignIn'
  
// function App() {
=======
import Sidebar from "./components/Sidebar.js";
import Titlebar from "./components/Titlebar.js";
import React, { useState, useRef } from "react";
import EntryList from "./components/EntryList.js";
import { v4 as uuidv4 } from "uuid";
import Home from "./screens/Home.js";
>>>>>>> 2cee48967391b5b48513614389e12b18c5e00e5c

function App() {
<<<<<<< HEAD
  const[todos, setTodos] = useState([])
  const todoNameRef = useRef()


  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos =>{
      return[...prevTodos,{id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <SignIn/>

  
    {/* <Titlebar />
    <Sidebar />
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5 text-right">
        Dream Journal
      </p>

      <input ref = {todoNameRef} type = "text"/>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {handleAddTodo}>Button</button>
      <p className="text-2xl text-gray-700 font-bold mb-5 text"> Entries</p>
      <TodoList todos ={todos}/>
    </div> */}
    </>
    
  );
=======
  const [loggedIn, setLoggedIn] = useState(true);
  return <>{loggedIn && <Home />}</>;
>>>>>>> 2cee48967391b5b48513614389e12b18c5e00e5c
}

export default App;
