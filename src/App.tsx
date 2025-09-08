import { Outlet } from "react-router-dom";
import "./App.css";
import { useStateObject } from "./utils/useStateObj";

function App() {
  const stateAndSetter = useStateObject({
    selectedTZ: {},
    textColor: "#000000",
    borderColor: "#000000",
    backgroundColor: "#000000",
    twelveHour: undefined,
    isDigital: true,
  });
  return <Outlet context={stateAndSetter} />;
}

export default App;
