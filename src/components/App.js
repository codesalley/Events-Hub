import { useEffect } from 'react';
import PropTypes from 'prop-types';
import SplashScreen from './SplashScreen';
import CategoryContainer from '../containers/CategoryContainer';
import MainContainer from '../containers/MainContainer';
import NavBarContainer from '../containers/NavBarContainer';

function App({ getEvents, events }) {
  useEffect(() => {
    getEvents(200);
  }, []);

  return events.length > 2 ? (
    <div className="main  px-2 flex flex-col gap-2 overflow-scroll">
      <NavBarContainer />
      <CategoryContainer />
      <MainContainer />
    </div>
  ) : <SplashScreen />;
}

App.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
