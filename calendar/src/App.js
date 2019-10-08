import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Calendar from "./component/calendar/Calendar";
import Weeks from "./component/calendar/Weeks";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Calendar /> */}
        <Weeks />
        {/* <div>WHERE ARE YOU ????</div> */}
      </header>
    </div>
  );
}

export default App;
