import { useEffect, useState, type JSX } from "react";
import Button from "../components/Button";
import { useStateContext } from "../utils/useStateObj";
import { useLoaderData, useParams } from "react-router-dom";
import type Cities from "../interfaces/Cities";
import citiesLoader from "../utils/citiesLoader";
import DigitalClock from "../components/DigitalClock";
import AnalogClock from "../components/AnalogClock";
import Settings from "../components/Settings";
import useBackground from "../utils/useBackground";
import "./css/clockpage.css";
// route definition
ClockPage.route = {
  path: "/Clock/:timeZone/*",
  index: 3,
  loader: citiesLoader,
};

function ClockPage(): JSX.Element {
  const [{ selectedTZ, isDigital }, setState] = useStateContext();
  const [isOpen, setIsOpen] = useState(false);

  // Type assertion for selected city/timezone and is12HourPreferred to enable proper TypeScript typing and autocomplete
  const selected: Cities = selectedTZ;

  // Destructuring timeZone and "*" from the URL.
  // The URL is in the format timeZone/*, so we need both the timeZone and the the "rest" part
  // to ensure autocomplete we give them the type of strings.
  const { timeZone, "*": rest } = useParams<{
    timeZone: string;
    "*": string;
  }>();

  // Combine the URL into a single variable.
  // If rest has a value, set fullTimeZone to timeZone/rest. if not just set it to timezone
  const fullTimeZone = rest ? `${timeZone}/${rest}` : timeZone;

  const cities: Cities[] = useLoaderData().cities;

  // Using the timezone from the url and try to find the whole object.
  // Then checks if the url timezone matches the selectedTZ.
  // If it doesnt match, update the selectedTZ to match the url so the user can type a timeZone manually.
  useEffect(() => {
    const city = cities.find((c) => c.timeZone === fullTimeZone);
    if (city && city.timeZone !== selectedTZ.timeZone) {
      setState("selectedTZ", city);
    }
  }, [fullTimeZone, selectedTZ, setState, cities]);
  useBackground(selected.city, selected.defaultpic);
  //  Button text. (For Digital / Analog)
  const toggleDigitalText = isDigital ? "Show Analog" : "Show Digital";

  // Function to open/close settings.
  const handleChangeColor = (): void => {
    setIsOpen(!isOpen);
  };

  // Function to handle Digital/Analog clock.
  const handleIsDigital = (): void => setState("isDigital", !isDigital);

  return (
    <main className="clockpage-container">
      <Button text={toggleDigitalText} onClick={handleIsDigital} />
      <Button onClick={handleChangeColor} text="Settings" />
      {isOpen ? <Settings /> : null}

      {
        <>
          <section
            className={`${
              isDigital ? "digitalclock-container" : "analogclock-container"
            }`}
          >
            {isDigital ? <DigitalClock /> : <AnalogClock />}
          </section>
          {selected.countryCode !== undefined && (
            <>
              <section className="text-container">
                <p>{`${selected.city} - ${selected?.country}`}</p>
                <img
                  src={`/flags/${selected.countryCode}.svg`}
                  alt={`${selected.city} Flag`}
                />
              </section>
            </>
          )}
        </>
      }
    </main>
  );
}

export default ClockPage;
