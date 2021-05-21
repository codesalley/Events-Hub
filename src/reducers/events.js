import { GET_ALL_EVENTS } from '../utils/Types';
import { initState } from '../store/initState';

const eventsReducer = (state = initState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_ALL_EVENTS:
      return [...state, payload.data];
    default:
      return state;
  }
};

export default eventsReducer;
