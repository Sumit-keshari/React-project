import { useEffect } from "react";
import { useCallback, useState ,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  
  const passwordInputRef = useRef("");
  const handleCopy = () => {
    passwordInputRef.current.select();
    navigator.clipboard.writeText(password);
  };

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value));
    passwordGenerator();
  };

  const handleNumberChange = (e) => {
    setNumberAllowed(e.target.checked);
    passwordGenerator();
  };

  const handleCharChange = (e) => {
    setCharAllowed(e.target.checked);
    passwordGenerator();
  };


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg  px-4 my-7 text-orange-500 bg-gray-700">
        <h1 className="text-blue-400 flex justify-center text-xl my-1 py-2">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 my-2 rounded-l-lg"
            ref={passwordInputRef}
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 my-2 shrink-0  rounded-r-lg"
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-3 mb-4">
          <div
            className="flex items-center gap-x-1"
            style={{ marginBottom: 10, paddingBottom: 10 }}
          >
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={handleLengthChange}
            />
            <label>Length: {length}</label>

            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              // onChange={setNumberAllowed((prev) => !prev)}
              onChange={handleNumberChange}
            />
            <label htmlFor="numberInput">Numbers</label>

            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              // onChange={setCharAllowed((prev) => !prev)}
              onChange={handleCharChange}
            />
            <label htmlFor="charInput">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
