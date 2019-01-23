import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: [],
      id: Math.floor(Math.random() * (61 - 1) + 1)
    };
    this.randomIdGen = this.randomIdGen.bind(this);
    this.fetchPlanets = this.fetchPlanets.bind(this);
  }

  randomIdGen() {
    let num = Math.floor(Math.random() * (61 - 1) + 1);
    this.setState(function() {
      return { id: num };
    });
  }

  fetchPlanets() {
    fetch(`https://swapi.co/api/planets/${this.state.id}`)
      .then(results => {
        return results.json();
      })
      .then(planet => {
        this.setState({ planet: planet });
      });
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  componentDidUpdate() {
    this.fetchPlanets();
  }

  render() {
    const { planet } = this.state;
    return !planet.name ? (
      <h1>Finding Planet...</h1>
    ) : (
      <div>
        <h1>{planet.name}</h1>
        <p>
          <strong>Rotation Period:</strong> {planet.rotation_period}
        </p>
        <p>
          <strong>Orbital Period:</strong> {planet.orbital_period}
        </p>
        <p>
          <strong>Diameter:</strong> {planet.diameter}
        </p>
        <p>
          <strong>Climate:</strong> {planet.climate}
        </p>
        <p>
          <strong>Terrain:</strong> {planet.terrain}
        </p>
        <p>
          <strong>Population:</strong> {planet.population}
        </p>
        <button onClick={this.randomIdGen}>New Planet</button>
      </div>
    );
  }
}

export default Card;
