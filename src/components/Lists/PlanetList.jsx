import withData from "../../hoc-helpers/withData";
import withChildFunction from "../../hoc-helpers/withChildFunction";
import ItemList from "../ItemList/ItemList";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const renderPlanet = ({name, population}) => <span>{name} ({population})</span>;

const mapMethodsToProps = ({getAllPlanets}) => {
  return {
    getData: getAllPlanets
  }
}

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderPlanet)
  ), mapMethodsToProps
);

export default PlanetList;
