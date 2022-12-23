import { useState } from "react";
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
  Spinner,
} from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState();
  const ratesData = useRatesData();
  const { date, rates, status } = ratesData;

  const onInputChange = ({ target }) => setAmount(target.value);
  const onSelectChange = ({ target }) => setCurrency(target.value);

  const calculateResult = () => {
    const rate = rates[currency];

    setResult({
      currency,
      startAmount: +amount,
      endAmount: amount * rate,
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
        <>
          <LoadingText>
            Trwa ładowanie danych <br />z Europejskiego Banku Centralnego.{" "}
            <br />
            Prosimy o chwilkę cierpliwości.
          </LoadingText>
          <Spinner></Spinner>
        </>
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
              <FormField as="select" value={currency} onChange={onSelectChange}>
                {Object.keys(rates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
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
