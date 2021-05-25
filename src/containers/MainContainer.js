import { connect } from 'react-redux';
import Container from '../components/Container';

const mapStateToProps = (state) => ({ events: state.events, filter: state.filter });

const MainContainer = connect(mapStateToProps)(Container);

export default MainContainer;
