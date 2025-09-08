import "react-clock/dist/Clock.css";
import { useEffect, useState } from "react";
import { useStateContext } from "../utils/useStateObj";
import type Cities from "../interfaces/Cities";
import { default as AnalogClock } from "react-clock";

function Clock() {
  const [{ selectedTZ, twelveHour, isDigital }] = useStateContext();
  const [time, setTime] = useState("");
  // Type assertion for selected city/timezone and is12HourPreferred to enable proper TypeScript typing and autocomplete
  const selected: Cities = selectedTZ;
  const is12HourPreferred: boolean | undefined = twelveHour;

  // Update the time every second using the selected timezone.
  // If the 12-hour format is defined, use it. if not, use default to the country's format.
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          timeZone: selected.timeZone,
          hour12: is12HourPreferred ?? twelveHour,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [selected, is12HourPreferred, twelveHour]);

  return (
    <>
      {time ? (
        <section>
          {isDigital ? <p>{time}</p> : <AnalogClock value={time} />}
          <p>{`${selected.city} - ${selected.country}`}</p>
          <img
            src={`/flags/${selected.countryCode}.svg`}
            alt={`${selected.city} Flag`}
          />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Clock;
