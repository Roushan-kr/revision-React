import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [toconvertedAmount, setToconvertedAmount] = useState(0);
  const [currentCurency, setCurrentCurency] = useState("usd");
  const [toConvertedCurency, setoConvertedCurency] = useState("inr");

  const currencyInfo = useCurrencyInfo(currentCurency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setCurrentAmount(toconvertedAmount);
    setToconvertedAmount(currentAmount);
    setoConvertedCurency(currentCurency);
    setCurrentCurency(toConvertedCurency);
  };

  const convert = () => {
    setToconvertedAmount(
      currentAmount * Number(currencyInfo[toConvertedCurency])
    );
  };
  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-700">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border bg-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="Form"
                  amount={currentAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setCurrentCurency(currency);
                  }}
                  onAmountChange={(amount) => {
                    setCurrentAmount(amount);
                  }}
                  selectedCurrency={currentCurency}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={toconvertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setoConvertedCurency(currency);
                  }}
                  onAmountChange={(amount) => {
                    toconvertedAmount(amount);
                  }}
                  selectedCurrency={toConvertedCurency}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg"
              >
                Convert {currentCurency.toUpperCase()} to{" "}
                {toConvertedCurency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full">
          hi
        </div>
      </div>
    </>
  );
}

export default App;
