import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result && (
      <>
        💸&nbsp;{result.startAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.endAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>&nbsp;
        💸
      </>
    )}
  </p>
);
