import {useState} from "react";
import PlanetList from "../Lists/PlanetList";
import PlanetDetails from "../Details/PlanetDetails";
import Row from "../Row/Row";

const PlanetPage = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const onSelectedItem = (id) => {
    setSelectedItemId(id);
  }

  return (
    <Row
      left={<PlanetList onSelectedItem={onSelectedItem}/>}
      right={<PlanetDetails itemId={selectedItemId}/>}
    />
  )
}

export default PlanetPage;
