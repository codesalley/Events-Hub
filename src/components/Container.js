import { connect } from 'react-redux';

const Container = (props) => {
  console.log(props);
  return (<h1> Container </h1>);
};

const mapStateToProps = (state) => ({ events: state.events });

export default connect(mapStateToProps)(Container);
