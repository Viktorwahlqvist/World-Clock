import React, { type JSX } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useStateContext } from "../utils/useStateObj";
import type Cities from "../interfaces/Cities";
import citiesLoader from "../utils/citiesLoader";
import "./css/homepage.css";
import Button from "../components/Button";
import { getFromStorage } from "../utils/useLocalStorageHelper";

// route definition
HomePage.route = {
  path: "/",
  index: 1,
  loader: citiesLoader,
};

function HomePage(): JSX.Element {
  const localTimeZones = getFromStorage<Cities>("timeZone");
  const loaderCities = useLoaderData().cities as Cities[];

  const cities: Cities[] = [...localTimeZones, ...loaderCities];

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

  const handleClick = () => navigate(`/add`);
  return (
    <main className="homepage-container">
      <section className="content-container">
        <select className="select-timezone" onChange={handleOnSelect}>
          <option value="">Choose City</option>
          {cities.map((t: Cities, i: number) => (
            <option key={i} value={t.city}>{`${t.city} - ${t.country}`}</option>
          ))}
        </select>
        <section className="new-timezone-container">
          <p className="homepage-para">
            Choose a city to check the time. Don’t see your city? Add it easily
            and keep track of it here.
          </p>
          <Button
            className="Add-timezone-btn"
            text="Add new Timezone"
            onClick={handleClick}
          />
        </section>
      </section>
    </main>
  );
}

export default HomePage;
