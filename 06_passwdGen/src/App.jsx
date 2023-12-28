import { useCallback, useEffect, useState, useRef } from "react";
// import './App.css'

function App() {
  const [passLen, setPassLen] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(true);
  const [isCharAllowed, setIsCharAllowed] = useState(true);
  const [passwd, setPasswd] = useState("");

  // useRef hook
  const passwdRef = useRef(null);

  // useCallback()-> use memeory cache to memorised value rither reruning whole code again andcls again it hust run that dependency instance
  const passGentor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumAllowed) str += "0123456789";
    if (isCharAllowed) str += "`!#$%^&*()_-+.+-*/'\"[]{}";
    const strlen = str.length;
    for (let i = 1; i < passLen; i++) {
      const num = Math.floor(Math.random() * strlen + 1);
      //  pass += str[num];
      pass += str.charAt(num);
    }
    setPasswd(pass);
  }, [
    isCharAllowed,
    isNumAllowed,
    setIsCharAllowed,
    setIsNumAllowed,
    setPasswd,
    passLen,
  ]);

  // it only look for update
  useEffect(() => {
    passGentor();
  }, [passLen, isNumAllowed, isCharAllowed, passGentor]);

  const clickToCopy = useCallback(async () => {
    {
      passwdRef.current?.select();
      passwdRef.current?.setSlectionRange(0, 32);
      try {
        // nextjs use server side rendring where window obj not present
        await window.navigator.clipboard.writeText(passwd);
        // alert("Copied the text: " + passwd);
      } catch (err) {
        console.error("Unable to copy text: " + err);
      }
    }
  }, [passwd]);
  return (
    <>
      <div className="w-full max-w-xs md:max-w-md mx-auto shadow-md rounded-xl px-4 my-8 bg-gray-700 text-orange-500 text-xl ">
        <h1 className="text-white text-center font-bold my-3">
          Password Genarator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={passwd}
            placeholder="password"
            readOnly
            ref={passwdRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 checked:bg-blue-900 "
            onClick={clickToCopy}
          >
            copy
          </button>
        </div>

        <div className="flex text-base gap-x-2 justify-center">
          <div className="iteam-center gap-x-1">
            <input
              type="range"
              min={8}
              max={32}
              value={passLen}
              onChange={(e) => setPassLen(e.target.value)}
              id="passlen"
              className="cursor-pointer"
            />
            <label htmlFor="passlen">Length:{passLen}</label>
          </div>
          <div className="iteam-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumAllowed}
              id="numInput"
              onChange={() => setIsNumAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="iteam-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="charInput"
              onChange={() => setIsCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="charInput">Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
