import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../utils/useStateObj";
import citiesJson from "../json/cities.json";
import type Cities from "../interfaces/Cities";

HomePage.route = {
  path: "/",
  index: 1,
};

function HomePage() {
  const cities = citiesJson as Cities[];
  const [setState] = useStateContext();
  const navigate = useNavigate();
  console.log(citiesJson);

  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = cities.find((t) => t.city === e.target.value);

    if (selected) {
      setState("selectedTZ", selected);

      navigate("/clock");
    }
  };
  return (
    <>
      <select onChange={handleOnSelect}>
        <option value="">Choose Country</option>
        {citiesJson.map((t: Cities) => (
          <option value={t.city}>{`${t.city} - ${t.country}`}</option>
        ))}
      </select>
    </>
  );
}

export default HomePage;
