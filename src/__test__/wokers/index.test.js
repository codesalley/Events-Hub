import { getEvents } from '../../actions/workers/index';

test('fetches all the events from ticket master and return events in json', async () => {
  const res = await getEvents(10);

  // eslint-disable-next-line no-underscore-dangle
  expect(res._embedded.events.length).tobe(10);
});
