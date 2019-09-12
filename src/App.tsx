import React from "react";
import "./App.css";
import { FXRates } from "./components/fxRates/fxRates";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        GraphQL Demo of exchange rates:
        <FXRates />
      </header>
    </div>
  );
};

export default App;
