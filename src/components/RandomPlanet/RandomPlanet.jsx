import React, {useEffect, useState} from 'react';
import './RandomPlanet.css';
import SwapiService from "../../api/swapiService";
import Spinner from "../Spinner/Spinner";
import Error from "../ErrorIndicator/ErrorIndicator";

const api = new SwapiService();

const RandomPlanet = () => {
  const [randomPlanet, setRandomPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleSuccess = (planet) => {
      setRandomPlanet(planet);
      setLoading(false);
    }

    const handleError = () => {
      setHasError(true);
      setLoading(false);
    }

    const fetchRandomPlanet = () => {
      const id = Math.floor(Math.random() * 18 + 2);

      api.getPlanet(id)
        .then(handleSuccess)
        .catch(handleError);
    }

    const intervalId = setInterval(fetchRandomPlanet, 10000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const spinner = loading ? <Spinner/> : null;
  const planet = !loading && !hasError ? <PlanetView planet={randomPlanet}/> : null;
  const error = hasError ? <Error/> : null;

  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {planet}
      {error}
    </div>
  );
};

export default RandomPlanet;

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
