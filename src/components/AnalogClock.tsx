import { useEffect, type JSX } from "react";
import Clock from "react-clock/src/Clock.js";
import "react-clock/dist/Clock.css";
import "../components/css/analog.css";
import { useStateContext } from "../utils/useStateObj";
import type Cities from "../interfaces/Cities";
import useClock from "../utils/useClock";

export default function AnalogClock(): JSX.Element {
  const [
    {
      secondHand,
      hourAndMinuteHand,
      hourAndMinuteLines,
      numberOfTheClockFace,
      selectedTZ,
      is12hPreferred,
    },
  ] = useStateContext();
  const selected: Cities = selectedTZ;
  const is12HourPreferred: boolean | undefined = is12hPreferred;
  const time = useClock(
    selected.timeZone,
    is12HourPreferred,
    selected.hour12 ?? false
  );
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--clock-second-hand", secondHand);
    root.style.setProperty("--clock-hand", hourAndMinuteHand);
    root.style.setProperty("--clock-mark", hourAndMinuteLines);
  }, [secondHand, hourAndMinuteHand, hourAndMinuteLines, numberOfTheClockFace]);
  return (
    <>
      {time ? (
        <Clock value={time} size={240} />
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </>
  );
}
