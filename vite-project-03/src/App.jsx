import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Compo from "./components/compo";

function App() {
  const [count, setCount] = useState(0);
  // let obj={
  //   name:"sumit",
  //   age:25
  // }
  // let arr=[1,2,3]

  return (
    <>
      <h1 className="bg-red-600 text-white rounded-xl">Tailwind test</h1>
      <Compo channel="sumit" test="this is file" />
      <Compo btnTest="button" price="48,000" />
    </>
  );
}

export default App;
