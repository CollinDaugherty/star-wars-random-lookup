import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faUndo,
  faSyncAlt,
  faRuler,
  faCloudSun,
  faMountain,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

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

  render() {
    const { planet } = this.state;
    const name = planet.name;
    return !planet.name ? (
      <div>
        <h1 className="title has-text-centered has-text-light">
          Finding Planet..
        </h1>
        <progress className="progress is-medium is-warning" max="100">
          15%
        </progress>
      </div>
    ) : (
      <div className="card">
        <div className="card-content">
          <h1 className="title has-text-centered">
            <a href={"https://starwars.fandom.com/wiki/" + name}>
              {planet.name}
            </a>
            <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth size="xs" />
          </h1>

          <div className="box is-shadowless is-radiusless">
            <p className="has-background-white-ter">
              <FontAwesomeIcon icon={faUndo} fixedWidth />
              <strong> Rotation Period:</strong>{" "}
              <span className="is-pulled-right">{planet.rotation_period}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faSyncAlt} fixedWidth />
              <strong> Orbital Period:</strong>{" "}
              <span className="is-pulled-right">{planet.orbital_period}</span>
            </p>
            <p className="has-background-white-ter">
              <FontAwesomeIcon icon={faRuler} fixedWidth />
              <strong> Diameter:</strong>{" "}
              <span className="is-pulled-right">{planet.diameter}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faCloudSun} fixedWidth />
              <strong> Climate:</strong>{" "}
              <span className="is-pulled-right">{planet.climate}</span>
            </p>
            <p className="has-background-white-ter">
              <FontAwesomeIcon icon={faMountain} fixedWidth />
              <strong> Terrain:</strong>{" "}
              <span className="is-pulled-right">{planet.terrain}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faUsers} fixedWidth />
              <strong> Population:</strong>{" "}
              <span className="is-pulled-right">{planet.population}</span>
            </p>
          </div>

          <hr />
          <button
            className="button is-warning is-fullwidth"
            onClick={event => {
              this.randomIdGen();
              this.fetchPlanets();
            }}
          >
            New Planet
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
