import { filter } from '../store/initState';
import { GET_EVENT_BY_COUNTRY } from '../utils/Types';

const filterReducer = (state = filter, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENT_BY_COUNTRY:
      return payload.code;

    default:
      return state;
  }
};

export default filterReducer;
