import React from "react";

import Resume from "./components/Resume";
import { data } from "./utils/data";
import "./App.css";

function App() {
  const experiences = Object.values(data);

  return <Resume experiences={experiences} />;
}

export default App;
