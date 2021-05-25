import { connect } from 'react-redux';
import ShowPage from '../components/ShowPage';

const mapStateToProps = (state) => ({
  events: state.events,
});

const ShowPageContainer = connect(mapStateToProps)(ShowPage);

export default ShowPageContainer;
