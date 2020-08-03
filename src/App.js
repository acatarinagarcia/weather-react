import React from "react";

import Container from "./Container";
import "./Container.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Container defaultCity="Oslo" />
      </div>
    </div>
  );
}

export default App;
