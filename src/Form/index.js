import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
  const [amount, setAmount] = useState("");

  const onInputChange = ({target}) => setAmount(target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
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
              name="Kwota w PLN"
              type="number"
              min="0.01"
              step="any"
              placeholder="PLN"
              autofocus
              required
              onChange={onInputChange}
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Waluta*:</span>
            <select className="form__field" name="currency" required>
                <option value="EUR">🇪🇺 Euro</option>
                <option value="USD">🇺🇸 Dolar amerykański</option>
                <option value="CHF">🇨🇭 Frank szwajcarski</option>
                <option value="GBP">🇬🇧 Funt brytyjski</option>
                <option value="HKD">🇭🇰 Dolar Hongkongu</option>
              </select>
          </label>
        </p>
        <p>
          <button className="form__button">Przelicz</button>
        </p>
        <p className="form__result">
          <span></span>
        </p>
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
