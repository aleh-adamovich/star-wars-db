import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population"/>
      <Record field="rotationPeriod" label="Rotation Period"/>
      <Record field="diameter" label="Diameter"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = ({getPlanet, getPlanetImage}) => {
  return {
    getData: getPlanet,
    getImageUrl: getPlanetImage,
  }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);
