import { useState, type JSX } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { saveToLocalTimeZone } from "../utils/useLocalStorageHelper";
import { useNavigate } from "react-router-dom";
import "./css/add-timezone.css";
import type { newTimeZone, TimeZone } from "../interfaces/Cities";
// route definition
AddTimeZonePage.route = {
  path: "/add",
  index: 2,
};

function AddTimeZonePage(): JSX.Element {
  const navigate = useNavigate();
  const [timeZone, setTimeZone] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [city, setCity] = useState("");
  const [notValid, setNotvalid] = useState("");

  const handleOnChangeTimeZone = (value: string): void => setTimeZone(value);
  const handleOnChangeCountryCode = (value: string): void =>
    setCountryCode(value);
  const handleOnChangeCity = (value: string): void => setCity(value);
  const handleOnChangeCountry = (value: string): void => setCountry(value);
  function handleOnSubmit(): void {
    // safe guard to check if the timeZone exists.
    const isValidTimeZone = (timeZone: string): timeZone is TimeZone => {
      const timeZones = Intl.supportedValuesOf("timeZone");
      return timeZones.includes(timeZone);
    };

    if (isValidTimeZone(timeZone)) {
      saveToLocalTimeZone<newTimeZone>("timeZone", {
        city,
        country,
        countryCode,
        timeZone,
        defaultpic: true,
      });
      navigate(`/`);
    } else {
      setNotvalid(
        `${timeZone} is not a valid Timezone try again. the correct format is "Europe/Stockholm`
      );
    }
  }

  return (
    <main className="Add-timezone-container">
      <section className="input-container">
        <Input
          label="Timezone"
          value={timeZone}
          onChange={handleOnChangeTimeZone}
          type="text"
        />

        <Input
          label="Country code"
          value={countryCode}
          onChange={handleOnChangeCountryCode}
          type="text"
        />
        <Input
          label="City"
          value={city}
          onChange={handleOnChangeCity}
          type="text"
        />
        <Input
          label="Country"
          value={country}
          onChange={handleOnChangeCountry}
          type="text"
        />

        <Button
          className="add-button"
          text="Add Timezone"
          onClick={handleOnSubmit}
        />
        {notValid ? <p className="error-msg"> {notValid}</p> : null}
      </section>
    </main>
  );
}

export default AddTimeZonePage;
