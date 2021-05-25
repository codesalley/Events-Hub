import { connect } from 'react-redux';
import App from '../components/App';
import { getAllEvents } from '../actions';

const mapDispatchToProps = {
  getEvents: (size) => getAllEvents(size),
};

const mapStateToProps = (state) => ({
  events: state.events,
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
