import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <p className="clock">
      <>Dzisiaj jest {formattedDate}</>
    </p>
  );
};

export default Clock;
