import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {result && (
      <>
        💸&nbsp;{result.startAmount.toFixed(2)}&nbsp;PLN&nbsp;=
        {" "}
        <strong>
          {result.endAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>&nbsp;
        💸
      </>
    )}
  </StyledResult>
);
