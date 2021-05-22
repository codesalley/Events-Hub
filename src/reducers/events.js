import { GET_ALL_EVENTS } from '../utils/Types';
import { initState } from '../store/initState';

const eventsReducer = (state = initState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_ALL_EVENTS:
      // eslint-disable-next-line no-underscore-dangle
      return [...payload.data._embedded.events];

    default:
      return state;
  }
};

export default eventsReducer;
