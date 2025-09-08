import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useStateContext } from "../utils/useStateObj";
import type Cities from "../interfaces/Cities";
import citiesLoader from "../utils/citiesLoader";

// route definition
HomePage.route = {
  path: "/",
  index: 1,
  loader: citiesLoader,
};

function HomePage() {
  // Type the JSON data as an array of Cities
  const cities = useLoaderData().cities as Cities[];
  const setState = useStateContext()[1];
  const navigate = useNavigate();

  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Find the city object that matches the users selection from the dropdown
    const selected = cities.find((t) => t.city === e.target.value);

    if (selected) {
      //Set selectedTZ state to the selected object.
      setState("selectedTZ", selected);
      // Navigate the user to clock page.
      navigate(`/clock/${selected.timeZone}`);
    }
  };
  return (
    <>
      <select onChange={handleOnSelect}>
        <option value="">Choose City</option>
        {cities.map((t: Cities, i: number) => (
          <option key={i} value={t.city}>{`${t.city} - ${t.country}`}</option>
        ))}
      </select>
    </>
  );
}

export default HomePage;
