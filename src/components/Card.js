import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: [],
      id: "61"
    };
  }

  componentDidMount() {
    fetch(`https://swapi.co/api/planets/${this.state.id}`)
      .then(results => {
        return results.json();
      })
      .then(planet => {
        this.setState({ planet: planet });
      });
  }

  render() {
    const { planet } = this.state;
    return (
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
      </div>
    );
  }
}

export default Card;
