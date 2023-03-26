import StarshipList from "../Lists/StarshipList";
import {withRouter} from "react-router-dom";

const StarshipPage = ({history}) => {
  const onSelectedItem = (itemId) => {
    history.push(itemId);
  }

  return (
    <StarshipList onSelectedItem={onSelectedItem}/>
  )
}

export default withRouter(StarshipPage);
