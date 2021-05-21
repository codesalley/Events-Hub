import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Category from './Category';
import { getAllEvents } from '../actions/index';
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

const mapDispatchToProps = {
  getEvents: (size) => getAllEvents(size),
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
