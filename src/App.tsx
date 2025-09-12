import { Outlet } from "react-router-dom";
import "./App.css";
import { useStateObject } from "./utils/useStateObj";
import { getFromStorage } from "./utils/useLocalStorageHelper";
import type { ClockColor } from "./interfaces/AnalogSettings";

function App() {
  // Gets clock color settings from localStorage, if none are stored default will be used
  // Uses generics to ensure the returned values have the correct type.
  const textColorFromStorage = getFromStorage<ClockColor>("textColor");
  const secondHandFromStorage = getFromStorage<ClockColor>("secondHand");
  const hourAndMinuteHandFromStorage =
    getFromStorage<ClockColor>("hourAndMinuteHand");
  const hourAndMinuteLinesFromStorage =
    getFromStorage<ClockColor>("hourAndMinuteLines");

  const stateAndSetter = useStateObject({
    selectedTZ: {},
    is12hPreferred: null,
    isDigital: true,
    // Digital clock
    textColor: textColorFromStorage ?? "#000000",
    // Analog clock
    secondHand: secondHandFromStorage ?? "#ff0505",
    hourAndMinuteHand: hourAndMinuteHandFromStorage ?? "#000000",
    hourAndMinuteLines: hourAndMinuteLinesFromStorage ?? "#000000",
  });

  return <Outlet context={stateAndSetter} />;
}

export default App;
