import { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Category from './Category';
import Container from './Container';
import SplashScreen from './SplashScreen';

function App({ getEvents, events }) {
  useEffect(() => {
    getEvents(200);
  }, []);

  return events.length > 2 ? (
    <div className="main  px-2 flex flex-col gap-2 overflow-scroll">
      <NavBar />
      <Category />
      <Container />
    </div>
  ) : <SplashScreen />;
}

App.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
