import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result && (
      <>
        💸 {result.startAmount.toFixed(2)} PLN ={" "}
        <strong>
          {result.endAmount.toFixed(2)} {result.currency}
        </strong>{" "}
        💸
      </>
    )}
  </p>
);
