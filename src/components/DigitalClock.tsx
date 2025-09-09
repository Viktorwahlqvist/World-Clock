import { useEffect, type JSX } from "react";
import { useStateContext } from "../utils/useStateObj";
import type Cities from "../interfaces/Cities";
import useClock from "../utils/useClock";

function DigitalClock(): JSX.Element {
  const [{ textColor, is12hPreferred, selectedTZ }] = useStateContext();
  const selected: Cities = selectedTZ;
  const is12HourPreferred: boolean | undefined = is12hPreferred;
  const time = useClock(selected.timeZone, is12HourPreferred, selected.hour12);
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--digital-text", textColor);
  }, [textColor]);
  return (
    <>
      {time ? (
        <>
          <p className="digital-time">{time}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default DigitalClock;
