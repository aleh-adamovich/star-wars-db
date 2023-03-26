import ItemDetails, {Record} from "../ItemDetails/ItemDetails";
import withSwapiService from "../../hoc-helpers/withSwapiService";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender"/>
      <Record field="birthYear" label="Birth Year"/>
      <Record field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  )
}

const mapMethodsToProps = ({getPerson, getPersonImage}) => {
  return {
    getData: getPerson,
    getImageUrl: getPersonImage,
  }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);
