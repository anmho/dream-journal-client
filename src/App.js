import React, { useState, useEffect } from "react";
import Home from "./screens/Home";
import { v4 as uuidv4 } from "uuid";
import SignIn from "./components/SignIn.js";
import UserService from "./services/user";

// function App() {

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // check if token exists
    const user_id = localStorage.getItem("user_id");

    setLoggedIn(UserService.isLoggedIn());

    // check if token is not expired

    // get user
    // set loggedin
  }, []);

  return <>{loggedIn ? <Home /> : <SignIn setLoggedIn={setLoggedIn} />}</>;
}

export default App;
