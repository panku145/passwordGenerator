import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!~`@#$%^&*(){}[]><?|:;,./";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useref Hook

  const passwordRef = useRef(null);

  const passwordCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    alert(`Password Copied Successfully`);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [numberAllowed, charAllowed, passwordGenerator, length]);

  return (
    <>
      <div className="bg-black h-screen w-full py-5 flex justify-start gap-5 items-center flex-col">
        <h1 className="text-xl text-white">Password Generator</h1>
        <div className="bg-gray-800 p-5 rounded-xl w-1/3 shadow-xl">
          <div className="shadow-sm flex rounded-lg">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="rounded-s-lg px-3 w-full outline-none py-1"
              ref={passwordRef}
            />
            <button
              onClick={passwordCopyToClipboard}
              className="bg-blue-700 rounded-e-lg outline-none text-white px-3 py-1 shrink-0"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-start items-center gap-3 py-2">
            <div className="flex items-center gap-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-red-500">Lenght: {length}</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="text-red-500">Number</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-red-500">Characters</label>
            </div>
          </div>
        </div>
      </div>



      
    </>
  );
}

export default App;
