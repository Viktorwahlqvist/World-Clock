import { useEffect, useState } from "react";

export default function useClock(
  timeZone: string,
  is12HourPreferred: boolean | undefined,
  hour12: boolean | undefined
): string {
  const [time, setTime] = useState("");
  // Update the time every second using the selected timezone.
  // If the 12-hour format is defined, use it. if not, use default to the country's format.
  // Leave it as undefined so if people have English language settings it will show pm and am for 12h clock.
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(undefined, {
          timeZone: timeZone,
          hour12: is12HourPreferred ?? hour12,
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZone, is12HourPreferred, hour12]);
  return time;
}
