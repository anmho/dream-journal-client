import React, {useState} from 'react';
import './App.css';
  
// function App() {

//   const [joke, setJoke] = useState("")
//   const getJoke = () => {
//     fetch("https://official-joke-api.appspot.com/random_joke").then((response) => response.json()).then((data) => {
//       setJoke(data.setup + "..." + data.punchline);
//     })
//   }
//   return (
//     <div>
//       <Stylesheet/>
//       <button onClick = {getJoke}>Get Joke Right Now</button>{joke}
//       <button button = "first">NEW</button>
//     </div>
//   )
// }
function App() {
  function button(){
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
  }
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>

      {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button> */}
      {button}
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
      
    </div>

    
  );
}

export default App;
