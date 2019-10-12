import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>Order Manager</h1>
        <div className="OrderPanel"></div>
      </div>
    </Router>
  );
};

export default App;
