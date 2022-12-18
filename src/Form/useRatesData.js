import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const getRates = async () => {
      try {
        const currenciesURL = `https://api.exchangerate.host/latest?base=PLN&symbols=EUR,USD,CHF,GBP,AUD,NZD,HK`;

        const response = await axios.get(currenciesURL);

        setRatesData({
          date: response.data.date,
          rates: response.data.rates,
          status: "success",
        });
      } catch (error) {
        console.error("Something bad happened", error);
        setRatesData({
          status: "error",
        });
      }
    };
    setTimeout(getRates, 2000);
  }, []);

  return ratesData;
};
