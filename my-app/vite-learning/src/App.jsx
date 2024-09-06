import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let [val, setval] = useState(5);
  // const addvalue = () => {
  //   if (val < 100) {
  //     setval(val + 1);
  //   } else {
  //     alert("Value is already at maximum");
  //   }
  // };

  let [val,set]=useState(1);
  const addvalue = () => {
    if(val<100){
      set(val=val+2)
      set(val=val+1)
      set(val=val+1)
      set(val=val+1)
    }
    else{
      alert("Value is already at maximum")
    }
  }
  let [val1, setval1] = useState(10);
  let addvalue1 = () => {
    if (val1 > 0) {
      setval1(val1 - 1);
    } else {
      alert("value is zero");
    }
  };

  return (
    <>
      <h1>This is first project</h1>
      <h2>counter value: {val}</h2>
      <button onClick={addvalue}>increase value: {val} </button>
      <br />
      <button onClick={addvalue1}>decrease value : {val1} </button>
    </>
  );
}

export default App;
