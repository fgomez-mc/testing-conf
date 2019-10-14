import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Orders from "./Pages/Orders";
import { testOrders } from "./helpers/seeds";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>Order Manager</h1>
        <Orders orders={testOrders} />
      </div>
    </Router>
  );
};

export default App;
