import Sidebar from "./components/Sidebar.js";
import Titlebar from "./components/Titlebar.js";
import React, { useState, useRef } from "react";
import EntryList from "./components/EntryList.js";
import { v4 as uuidv4 } from "uuid";
import Home from "./screens/Home.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return <>{loggedIn && <Home />}</>;
}

export default App;
