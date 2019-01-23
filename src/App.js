import React, { Component } from "react";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <section className="section is-large">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <Card />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
