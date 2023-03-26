import withData from "../../hoc-helpers/withData";
import withChildFunction from "../../hoc-helpers/withChildFunction";
import ItemList from "../ItemList/ItemList";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const renderStarship = ({name, model}) => <span>{name} ({model})</span>;

const mapMethodsToProps = ({getAllStarships}) => {
  return {
    getData: getAllStarships
  }
}

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderStarship)
  ),
  mapMethodsToProps);

export default StarshipList;
