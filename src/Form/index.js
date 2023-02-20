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
        Currency converter by <Special>dbc</Special>
      </Header>
      {status === "error" ? (
        <ErrorText>
          Oops...something went wrong.😟
          <br />
          Please check your internet connection. <br />
          If your connection is stable, please try again later.
        </ErrorText>
      ) : status !== "success" ? (
        <>
          <LoadingText>
            Loading data from
            <br />
            the European Central Bank. <br />
            Please be patient.
          </LoadingText>
          <Spinner></Spinner>
        </>
      ) : (
        <StyledFieldset>
          <p>
            <Label>
              <LabelText>Amount*:</LabelText>
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
              <LabelText>Currency*:</LabelText>
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
            <Button>Convert</Button>
          </p>
          <Result result={result} />
          <p>*- field required</p>
          <p>
            Exchange rates are taken from the European Central Bank.
            <br />
            Current as of: <strong>{date}</strong>
          </p>
        </StyledFieldset>
      )}
    </StyledForm>
  );
};

export default Form;
