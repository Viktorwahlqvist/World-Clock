import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useStateContext } from "../utils/useStateObj";
import Input from "../components/Input";
import { useLoaderData, useParams } from "react-router-dom";
import type Cities from "../interfaces/Cities";
import citiesLoader from "../utils/citiesLoader";
import Clock from "../components/Clock";

DigitalClockPage.route = {
  path: "/Clock/:timeZone/*",
  index: 3,
  loader: citiesLoader,
};

function DigitalClockPage() {
  const [
    {
      textColor,
      borderColor,
      backgroundColor,
      selectedTZ,
      twelveHour,
      isDigital,
    },
    setState,
  ] = useStateContext();
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
  // Function to open/close settings.
  const handleChangeColor = () => {
    setIsOpen(!isOpen);
  };
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

  // Array of all color settings.
  const colorSettings = [
    { key: "textColor", label: "Text Color", value: textColor, type: "color" },
    {
      key: "borderColor",
      label: "Border Color",
      value: borderColor,
      type: "color",
    },
    {
      key: "backgroundColor",
      label: "Background color",
      value: backgroundColor,
      type: "color",
    },
  ];

  const toggleHourText = twelveHour ? "Switch to 24-hour" : "Switch to 12-hour";

  return (
    <>
      <section>
        <Button
          text={`${isDigital ? "Show Analog" : "Show Digital"}`}
          onClick={() => setState("isDigital", !isDigital)}
        />
        <Button onClick={handleChangeColor} text="Settings" />
        {isOpen ? (
          <>
            {colorSettings.map((c) => (
              <Input
                key={c.key}
                label={c.label}
                value={c.value}
                type={c.type}
                onChange={(color) => setState(c.key, color)}
              />
            ))}
            <Button
              text={toggleHourText}
              onClick={() => setState("twelveHour", !twelveHour)}
            />
            <Button
              text="Reset"
              onClick={() => setState("twelveHour", undefined)}
            />
          </>
        ) : null}
      </section>
      <Clock />
    </>
  );
}

export default DigitalClockPage;
