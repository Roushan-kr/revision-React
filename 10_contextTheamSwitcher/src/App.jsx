import { useEffect, useState } from "react";
import { TheamProvider } from "./context/Theam";
import Card from "./components/Card";
import ThemeBtn from "./components/ThameBtn";
import "./App.css";

function App() {
  const [theamMode, setTheamMode] = useState("light");
  // defineing our own function with same context function name

  const darkTheam = () => {
    setTheamMode("dark");
  };

  const lightTheam = () => {
    setTheamMode("light");
  };

  // js for actual change in ui
  useEffect(() => {
    const root = document.querySelector("html");
    root.classList.remove("light", "dark");
    root.classList.add(theamMode);
  }, [theamMode]);

  return (
    // when in Provider value which is not difine or not knwon then we
    // are able to define our own function which with that name
    // which futher rapup with that in that context
    <TheamProvider value={{ theamMode, darkTheam, lightTheam }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </TheamProvider>
  );
}

export default App;
