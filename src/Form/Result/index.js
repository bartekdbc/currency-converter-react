import "./style.css";

export const Result = ({ result }) => {
  if (result) {
    return (
      <p className="result">
        💸 {result.startAmount.toFixed(2)} PLN ={" "}
        <strong>
          {result.endAmount.toFixed(2)} {result.currency}
        </strong> 💸
      </p>
    );
  }
  return <p className="result"></p>;
};
