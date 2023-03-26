import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model"/>
      <Record field="length" label="Length"/>
      <Record field="costInCredits" label="Cost"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = ({getStarship, getStarshipImage}) => {
  return {
    getData: getStarship,
    getImageUrl: getStarshipImage,
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);
