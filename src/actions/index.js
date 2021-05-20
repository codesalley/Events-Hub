import { GET_ALL_EVENTS, GET_EVENT_BY_COUNTRY, EVENT } from '../utils/Types';

export const getAllEvents = (size) => ({
  type: GET_ALL_EVENTS,
  payload: {
    size,
  },
});

export const getEventByCode = (size, code) => ({
  type: GET_EVENT_BY_COUNTRY,
  payload: {
    size,
    code,
  },
});

export const showEvent = (id) => ({
  type: EVENT,
  payload: {
    id,
  },
});
