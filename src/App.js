import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "./App.css";
import NewsApp from "./components/NewsApp";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NewsApp />
      </div>
    );
  }
}
