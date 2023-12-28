import { useEffect, useState } from "react";

const apiUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1`;

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(()=>{
    (async () => {
      try {
        const response = await fetch(
          `${apiUrl}/latest/currencies/${currency}.json`
        );
        const data = await response.json();
        setData(data[currency]);
      } catch (error) {
        console.log("some error coccure in request url", error.msg);
      }
    })()
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
