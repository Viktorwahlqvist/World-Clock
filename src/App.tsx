import { Outlet } from "react-router-dom";
import "./App.css";
import { useStateObject } from "./utils/useStateObj";

function App() {
  const stateAndSetter = useStateObject({
    selectedTZ: {},
    is12hPreferred: null,
    isDigital: true,
    // Digital clock
    textColor: "#000000",
    // Analog clock
    secondHand: "#ff0505",
    hourAndMinuteHand: "#000000",
    hourAndMinuteLines: "#000000",
  });

  return <Outlet context={stateAndSetter} />;
}

export default App;
