export const EVENTS_URL = (size) => `https://app.ticketmaster.com/discovery/v2/events.json?size=${size}&apikey=${process.env.REACT_APP_API_KEY}`;
export const EVENTS_BY_ID_URL = (id) => `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${process.env.REACT_APP_API_KEY}`;
export const EVENTS_BY_COUNTRY_CODE = (size, code) => `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${code}&size=${size}&apikey=${process.env.REACT_APP_API_KEY}`;
