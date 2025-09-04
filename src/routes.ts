
import { createElement } from "react";
import type { JSX } from "react";
import AddTimeZonePage from "./pages/AddTimeZonePage";
import ClockPage from "./pages/ClockPage";
import HomePage from "./pages/HomePage";

interface Route {
  element: JSX.Element;
  path: string;
  index: number;
}

export default[ 
  HomePage,
  AddTimeZonePage,
  ClockPage
]
.map(x => (({element: createElement(x), ...x.route}) as Route))
.sort ((a, b) => (a.index || 0) - (b.index || 0))
