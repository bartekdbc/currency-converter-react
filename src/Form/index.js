import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState();

  const rate = currencies.find(({ short }) => short === currency).rate;

  const onInputChange = ({ target }) => setAmount(target.value);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const calculateResult = () => {
    setResult({
      currency,
      startAmount: +amount,
      endAmount: amount / rate,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h1 className="form__header">
        Kalkulator walutowy by <span className="form__special">dbc</span>
      </h1>
      <fieldset className="form__fieldset">
        <legend className="form__legend"></legend>
        <p>
          <label>
            <span className="form__labelText">Kwota*:</span>
            <input
              value={amount}
              className="form__field"
              type="number"
              min="0.01"
              step="any"
              placeholder="PLN"
              required
              onChange={onInputChange}
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Waluta*:</span>
            <select
              value={currency}
              className="form__field"
              onChange={onSelectChange}
            >
              {currencies.map((currency) => (
                <option 
                key={currency.short} 
                value={currency.short}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <Result result={result} />
        <p>*- wymagane pola</p>
        <p>
          Kursy walut pobierane są z Narodowego Banku Polskiego.
          <br />
          Aktualne na dzień: <strong>2022-10-24</strong>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
