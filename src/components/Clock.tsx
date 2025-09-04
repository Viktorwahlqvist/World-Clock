import { useEffect, useState } from "react";
import { useStateContext } from "../utils/useStateObj";
import type Cities from "../interfaces/Cities";

function Clock() {
  const [{ selectedTZ }] = useStateContext();
  const selected = selectedTZ as Cities;
  const [time, setTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          timeZone: selectedTZ.timeZone,
          hour12: selectedTZ.hour12,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {time ? (
        <section>
          <p>{time}</p>
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
