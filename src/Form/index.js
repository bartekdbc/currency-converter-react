import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import {
  StyledForm,
  Header,
  Special,
  StyledFieldset,
  Label,
  LabelText,
  FormField,
  Button,
  LoadingText,
  ErrorText,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);
  const [result, setResult] = useState();
  const ratesData = useRatesData();
  const { date, status } = ratesData;

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
    <StyledForm onSubmit={onFormSubmit}>
      <Header>
        Kalkulator walutowy by <Special>dbc</Special>
      </Header>
      {status === "error" ? (
        <ErrorText>
          Ups...coś poszło nie tak.😟
          <br />
          Sprawdź swoje połączenie z internetem. <br />
          Jeśli Twoje połączenie jest stabilne, spróbuj ponownie później.
        </ErrorText>
      ) : status !== "success" ? (
        <LoadingText>
          Trwa ładowanie danych z Europejskiego Banku Centralnego.
        </LoadingText>
      ) : (
        <StyledFieldset>
          <p>
            <Label>
              <LabelText>Kwota*:</LabelText>
              <FormField
                value={amount}
                type="number"
                min="0.01"
                step="any"
                placeholder="PLN"
                required
                onChange={onInputChange}
              />
            </Label>
          </p>
          <p>
            <Label>
              <LabelText>Waluta*:</LabelText>
              <FormField 
                as="select" 
                value={currency} 
                onChange={onSelectChange}
                >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </FormField>
            </Label>
          </p>
          <p>
            <Button>Przelicz</Button>
          </p>
          <Result result={result} />
          <p>*- wymagane pola</p>
          <p>
            Kursy walut pobierane są z Europejskiego Banku Centralnego.
            <br />
            Aktualne na dzień: <strong>{date}</strong>
          </p>
        </StyledFieldset>
      )}
    </StyledForm>
  );
};

export default Form;
