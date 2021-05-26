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
          <a
            href="https://www.linkedin.com/feed/?trk=404_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Evgeniya Dzynia{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/echerevko/SheCodes-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>{" "}
      </div>
    </div>
  );
}

export default App;
