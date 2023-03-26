export default class SwapiService {
  baseUrl = 'https://swapi.dev/api/';
  baseImage = 'https://starwars-visualguide.com/assets/img';

  getResponse = async (url) => {
    const response = await fetch(`${this.baseUrl}/${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return await response.json();
  }

  extractId = (url) => {
    const regExp = /\/([0-9]*)\/$/;
    return url.match(regExp)[1];
  }

  transformPerson = (person) => {
    const { url, name, gender, birth_year, eye_color } = person;
    return {
      id: this.extractId(url),
      name,
      gender,
      birthYear: birth_year,
      eyeColor: eye_color,
    }
  }

  getAllPeople = async () => {
    const response = await this.getResponse('/people/');
    return response.results.map(elem => this.transformPerson(elem));
  }

  getPerson = async (id) => {
    const person =  await this.getResponse(`/people/${id}`);
    return this.transformPerson(person);
  }

  transformPlanet = (planet) => {
    const {
      url,
      name,
      population,
      rotation_period: rotationPeriod,
      diameter
    } = planet;
    return {
      id: this.extractId(url),
      name,
      population,
      rotationPeriod,
      diameter,
    }
  }

  transformStarship = (starship) => {
    const {
      url,
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      crew,
      passengers,
      cargo_capacity
    } = starship;

    return {
      id: this.extractId(url),
      name,
      model,
      manufacturer,
      costInCredits: cost_in_credits,
      length,
      crew,
      passengers,
      cargoCapacity: cargo_capacity
    }
  }

  getAllPlanets = async() => {
    const response = await this.getResponse('/planets/');
    return response.results.map((planet) => this.transformPlanet(planet));
  }

  getPlanet = async (id) => {
    const planet =  await this.getResponse(`/planets/${id}`);
    return this.transformPlanet(planet);
  }

  getAllStarships = async () => {
    const response = await this.getResponse('/starships/');
    return response.results.map((starship) => this.transformStarship(starship));
  }

  getStarship = async (id) => {
    const starship = await this.getResponse(`/starships/${id}`);
    return this.transformStarship(starship);
  }

  getPersonImage = async (id) => {
    return `${this.baseImage}/characters/${id}.jpg`;
  }

  getStarshipImage = async (id) => {
    return `${this.baseImage}/starships/${id}.jpg`;
  }

  getPlanetImage = (id) => {
    return `${this.baseImage}/planets/${id}.jpg`;
  }
}


