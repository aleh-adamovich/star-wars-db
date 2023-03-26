import {useState} from "react";
import ItemList from "../ItemList/ItemList";
import SwapiService from "../../api/swapiService";
import ItemDetails from "../ItemDetails/ItemDetails";
import Row from "../Row/Row";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const PeoplePage = () => {
  const swapi = new SwapiService();

  const [selectedPersonId, setSelectedPersonId] = useState(1);

  const onPersonSelect = (personId) => {
    setSelectedPersonId(personId);
  }

  const getPeopleData = () => {
    return  swapi.getAllPeople();
  }

  const itemList = (
    <ItemList
      onPersonSelect={onPersonSelect}
    />
  );

  const personDetails = (
    <ItemDetails selectedPersonId={selectedPersonId}/>
  );

  return (
    <ErrorBoundary>
      <Row left={itemList} right={personDetails}/>
    </ErrorBoundary>
  )
}

export default PeoplePage;
