import { GET_ALL_EVENTS, GET_EVENT_BY_COUNTRY, EVENT } from '../utils/Types';
import { getEvents } from './workers/index';

export const getAllEvents = (size) => async (dispatch) => {
  const data = await getEvents(size);

  dispatch({
    type: GET_ALL_EVENTS,
    payload: {
      data,
    },
  });
  return data;
};

export const getEventByCode = (code) => ({
  type: GET_EVENT_BY_COUNTRY,
  payload: {
    code,
  },
});

export const showEvent = (id) => ({
  type: EVENT,
  payload: {
    id,
  },
});
