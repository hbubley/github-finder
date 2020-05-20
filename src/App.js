import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
