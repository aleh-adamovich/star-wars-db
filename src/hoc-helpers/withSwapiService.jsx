import {SwapiServiceConsumer} from "../context/swapi-service-context";

const withSwapiService = (WrappedComponent, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);

          return (
            <WrappedComponent
              {...props}
              {...serviceProps}
              swapiService={swapiService}
            />
          )
        }
        }
      </SwapiServiceConsumer>
    )
  }
}

export default withSwapiService;
