import './App.css';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import {useState} from "react";
import SwapiService from "../../api/swapiService";
import {SwapiServiceProvider} from "../../context/swapi-service-context";
import DummySwapiService from "../../api/dummySwapiService";
import PeoplePage from "../Pages/PeoplePage";
import PlanetPage from "../Pages/PlanetPage";
import StarshipPage from "../Pages/StarshipPage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StarshipDetails from "../Details/StarshipDetails";
import SecretPage from "../Pages/SecretPage";
import LoginPage from "../Pages/LoginPage";

const App = () => {
  const [apiService, setApiService] = useState(new SwapiService());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const btnServiceLabel = apiService instanceof SwapiService ? 'Dummy Service' : 'Swapi Service';

  const onToggleService = () => {
    const service = apiService instanceof SwapiService ? new DummySwapiService() : new SwapiService();
    setApiService(service);
  }

  const onLogin = () => setIsLoggedIn(true);

  return (
    <ErrorBoundary>
      <SwapiServiceProvider value={apiService}>
        <BrowserRouter>
          <div className='p-3'>
            <Header
              btnLabel={btnServiceLabel}
              onToggleService={onToggleService}
            />

            <RandomPlanet/>
            <Switch>
              <Route path='/' exact render={() => <h2>Welcome to Star Wars DB</h2>}/>
              <Route path='/people/:id?' component={PeoplePage}/>
              <Route path='/planets' component={PlanetPage}/>
              <Route path='/starships' exact component={StarshipPage}/>
              <Route path='/starships/:id' render={({match}) => {
                const {id} = match.params;
                return <StarshipDetails itemId={id}/>;
              }
              }/>
              <Route path='/login' render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin}/>}/>
              <Route path='/secret' render={() => <SecretPage isLoggedIn={isLoggedIn}/>}/>
              <Route render={() => <h2>Page not found</h2>}/>
            </Switch>
          </div>
        </BrowserRouter>
      </SwapiServiceProvider>
    </ErrorBoundary>
  );
};

export default App;
