import withData from "../../hoc-helpers/withData";
import withChildFunction from "../../hoc-helpers/withChildFunction";
import ItemList from "../ItemList/ItemList";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const renderPerson = ({name, birthYear}) => <span>{name} ({birthYear})</span>;

const mapMethodsToProps = ({getAllPeople}) => {
  return {
    getData: getAllPeople
  }
}

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderPerson)
  ), mapMethodsToProps
);

export default PersonList;
