import PersonList from "../Lists/PersonList";
import PersonDetails from "../Details/PersonDetails";
import Row from "../Row/Row";
import {withRouter} from "react-router-dom";

const PeoplePage = ({history, match}) => {

  const onSelectedItem = (id) => {
    history.push(id);
  }

  const {id} = match.params;

  return (
    <Row
      left={<PersonList onSelectedItem={onSelectedItem}/>}
      right={<PersonDetails itemId={id}/>}
    />
  )
}

export default withRouter(PeoplePage);
