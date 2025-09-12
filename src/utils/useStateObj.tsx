import { useState } from "react";
import { useOutletContext } from "react-router-dom";
// Custom hook that wraps useState to manage key-value pair
// Setter function that updates or created a property in the object by key.
export function useStateObject(object: any) {
  const [state, setState] = useState(object);
  function setter(key: string, value: any) {
    setState({ ...state, [key]: value });
  }
  return [state, setter];
}

// A helper hook to access the state with React Routers outlet context.
export function useStateContext() {
  return useOutletContext<[any, Function]>();
}
