import { Outlet } from "react-router-dom";
import "./App.css";
import { useStateObject } from "./utils/useStateObj";

function App() {
  const stateAndSetter = useStateObject({
    selectedTZ: {},
  });
  return <Outlet context={stateAndSetter} />;
}

export default App;
