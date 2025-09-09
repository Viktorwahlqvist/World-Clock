import { useState, type JSX } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { saveToLocal } from "../utils/localStorageHelper";
import { useNavigate } from "react-router-dom";

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
    console.log(timeZone);
    // För validering, hämtar alla tidsoner sen kollar om user input finns med.
    const timeZones = Intl.supportedValuesOf("timeZone");
    console.log(timeZones);

    if (timeZones.includes(timeZone)) {
      saveToLocal("timeZone", {
        city,
        country,
        countryCode,
        timeZone,
        defaultpic: true,
      });
      navigate(`/clock/${timeZone}`);
    } else {
      setNotvalid(
        `${timeZone} is not a valid Timezone try again. the correct format is "Europe/Stockholm`
      );
    }
  }

  return (
    <>
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
      <Button text="Add Timezone" onClick={handleOnSubmit} />
      {notValid ? notValid : null}
    </>
  );
}

export default AddTimeZonePage;
