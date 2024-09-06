import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center "
      style={{ backgroundColor: color }}
    >
      <div className="h-10 flex px-2 text-center justify-center border-black border-2 items-center bg-white gap-5">
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-red-600 text-white rounded-2xl ">
          <button className="w-full" onClick={() => setColor("red")}>
            Red
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-black text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("black")}>
            Black
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-white  rounded-2xl">
          <button className="w-full" onClick={() => setColor("white")}>
            White
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-orange-500 text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("orange")}>
            Orange
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-pink-500 text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("pink")}>
            Pink
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-violet-400 text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("violet")}>
            Violet
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-blue-600 text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("blue")}>
            Blue
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-green-600  text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("green")}>
            Green
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-gray-400 text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("gray")}>
            Gray
          </button>
        </div>
        <div className="h-6 border-black border-2 w-20 flex justify-center items-center bg-yellow-600 text-white rounded-2xl">
          <button className="w-full" onClick={() => setColor("yellow")}>
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
