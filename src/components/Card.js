import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: [],
      id: Math.floor(Math.random() * (61 - 1) + 1)
    };
    this.randomIdGen = this.randomIdGen.bind(this);
  }

  randomIdGen() {
    let num = Math.floor(Math.random() * (61 - 1) + 1);
    this.setState(function() {
      return { id: num };
    });
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

  componentDidUpdate() {
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
        <button onClick={this.randomIdGen.bind(this)}>New Planet</button>
      </div>
    );
  }
}

export default Card;
