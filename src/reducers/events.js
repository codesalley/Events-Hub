import { GET_ALL_EVENTS } from '../utils/Types';
import { getEvents } from './workers/index';

const eventsReducer = async (state = [], actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_ALL_EVENTS:
      return [...state, await getEvents(payload.size)];
    default:
      return state;
  }
};

export default eventsReducer;
