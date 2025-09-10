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
import { getFromStorage } from "../utils/useLocalStorageHelper";
// route definition
ClockPage.route = {
  path: "/Clock/:timeZone/*",
  index: 3,
  loader: citiesLoader,
};

function ClockPage(): JSX.Element {
  const localTimeZones = getFromStorage<Cities>("timeZone");
  const loaderCities = useLoaderData().cities as Cities[];

  const [{ selectedTZ, isDigital }, setState] = useStateContext();
  const [isOpen, setIsOpen] = useState(false);
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

  const cities: Cities[] = [...localTimeZones, ...loaderCities];
  const city = cities.find((c) => c.timeZone === fullTimeZone);
  // Type assertion for selected city/timezone and is12HourPreferred to enable proper TypeScript typing and autocomplete
  const selected: Cities = selectedTZ;

  // Using the timezone from the url and try to find the whole object.
  // Then checks if the url timezone matches the selectedTZ.
  // If it doesnt match, update the selectedTZ to match the url so the user can type a timeZone manually.
  useEffect(() => {
    if (city && city.timeZone !== selectedTZ.timeZone) {
      setState("selectedTZ", city);
    }
  }, [selectedTZ, setState, city]);
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
      <section className="button-container">
        <Button
          className="is-Digital-Button"
          text={toggleDigitalText}
          onClick={handleIsDigital}
        />
        <Button
          className="settings-button"
          onClick={handleChangeColor}
          text="Settings"
        />
      </section>

      {isOpen ? <Settings /> : null}

      {
        <section className="Clock-container">
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
        </section>
      }
    </main>
  );
}

export default ClockPage;
