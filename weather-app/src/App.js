import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          This project was coded by
          <a href="/" target="_blank">
            {" "}
            Evgeniya Dzynia{" "}
          </a>
          and is{" "}
          <a href="/" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}

export default App;
