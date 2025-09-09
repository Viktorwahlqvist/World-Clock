import type AnalogSettings from "../interfaces/AnalogSettings";
import type { ClockColor } from "../interfaces/AnalogSettings";
import { useStateContext } from "../utils/useStateObj";
import Button from "./Button";
import Input from "./Input";
import type DigitalSettings from "../interfaces/DigitalSettings";
import type { JSX } from "react";
import "./css/settings.css";

export default function Settings(): JSX.Element {
  const [
    {
      textColor,
      is12hPreferred,
      isDigital,
      secondHand,
      hourAndMinuteHand,
      hourAndMinuteLines,
    },
    setState,
  ] = useStateContext();
  // Array of all color settings. keyof AnalogSettings will be either textColor,clocksecondHand ,hourAndMinuteHand or hourAndMinuteLines
  const digitalColorSettings: {
    key: keyof DigitalSettings;
    label: string;
    value: ClockColor;
    type: "color";
  }[] = [
    { key: "textColor", label: "Text Color", value: textColor, type: "color" },
  ];

  const analogColorSettings: {
    key: keyof AnalogSettings;
    label: string;
    value: ClockColor;
    type: "color";
  }[] = [
    {
      key: "secondHand",
      label: "Second Hand",
      value: secondHand,
      type: "color",
    },
    {
      key: "hourAndMinuteHand",
      label: "Hour And Minute Hand",
      value: hourAndMinuteHand,
      type: "color",
    },
    {
      key: "hourAndMinuteLines",
      label: "Hour And Minute Lines",
      value: hourAndMinuteLines,
      type: "color",
    },
  ];

  // Button text. (For the preffered format.)
  const toggleHourText = is12hPreferred
    ? "Switch to 24-hour"
    : "Switch to 12-hour";

  // function that will run when user click on 12/24h button.
  const handleToggleHour = (): void =>
    setState("is12hPreferred", !is12hPreferred);
  // If user click reset, the preffered format will reset to null.
  const handleReset = (): void => setState("is12hPreferred", null);

  // Function to handle the color settings, ClockColor type only accepts  `#${string}` | `rgb(${number}, ${number}, ${number})`
  // digitalColorSettingsKey is the field of the color setting, and with keyof we can make an union so its gonna either be textColor, borderColor or backgroundColor.
  const handleDigitalColorSettingsChange = (
    color: ClockColor,
    colorFields: { key: keyof DigitalSettings }
  ): void => setState(colorFields.key, color);

  const handleAnalogColorSettingsChange = (
    color: ClockColor,
    colorFields: { key: keyof AnalogSettings }
  ): void => setState(colorFields.key, color);
  return (
    <section className="settings-container">
      {
        <>
          {isDigital
            ? digitalColorSettings.map((c) => (
                <Input
                  key={c.key}
                  label={c.label}
                  value={c.value}
                  type={c.type}
                  onChange={(color) =>
                    handleDigitalColorSettingsChange(color as ClockColor, c)
                  }
                />
              ))
            : analogColorSettings.map((c) => (
                <Input
                  key={c.key}
                  label={c.label}
                  value={c.value}
                  type={c.type}
                  onChange={(color) =>
                    handleAnalogColorSettingsChange(color as ClockColor, c)
                  }
                />
              ))}

          <Button text={toggleHourText} onClick={handleToggleHour} />
          <Button text="Reset" onClick={handleReset} />
        </>
      }
    </section>
  );
}
