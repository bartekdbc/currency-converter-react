import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return <StyledClock>Today is {formattedDate}</StyledClock>;
};

export default Clock;
